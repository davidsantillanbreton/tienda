
        window.onload = function () {
                let datos = [
                {
                    id: 1,
                    nombre: 'SUSTRATO 500g',
                    precio: 40,
                    
                    imagen: 'IMG/sustrato.jpeg'
                },
                {
                    id: 2,
                    nombre: 'SUCULENTA MEDIANA',
                    precio: 25,
                    
                    imagen: 'IMG/suculenta.jpeg'
                },
                {
                    id: 3,
                    nombre: 'TIERRA 1KG',
                    precio: 15,
                    
                    imagen: 'IMG/tierra.jpeg'
                },
                {
                    id: 4,
                    nombre: 'CACTUS MEDIANO',
                    precio: 30,
                    
                    imagen: 'IMG/cactus.jpeg'
                },
                {
                    id: 5,
                    nombre: 'CONTENEDOR STANDAR',
                    precio: 30,
                    
                    imagen: 'IMG/pecera.jpeg'
                },
                {
                    id: 6,
                    nombre: 'PIEDRAS DECORATIVAS 1KG',
                    precio: 30,
                    imagen: 'IMG/piedras.jpeg'
                },
            ]
            let $items = document.querySelector('#productos');
            let carrito = [];
            let total = 0;
            let $carrito = document.querySelector('#carrito');
            let $total = document.querySelector('#total');
            let $botonVaciar = document.querySelector('#boton-vaciar');

            function renderItems() {
                for (let info of datos) {
                    
                    let miNodo = document.createElement('div');
                    miNodo.classList.add('tarjeta');
                    
                    let miNodoCardBody = document.createElement('div');
                    miNodoCardBody.classList.add('tarjeta-cuerpo');
                    
                    let miNodoTitle = document.createElement('h3');
                    miNodoTitle.classList.add('titulo-tarjeta');
                    miNodoTitle.textContent = info['nombre'];
                    
                    let miNodoImagen = document.createElement('img');
                    miNodoImagen.classList.add('imagen-producto');
                    miNodoImagen.setAttribute('src', info['imagen']);
                    
                    let miNodoPrecio = document.createElement('p');
                    miNodoPrecio.classList.add('texto-tarjeta');
                    miNodoPrecio.textContent = '$' + info['precio'];
                     
                    let miNodoBoton = document.createElement('button');
                    miNodoBoton.classList.add('boton');
                    miNodoBoton.textContent = 'agregar al carrito';
                    miNodoBoton.setAttribute('marcador', info['id']);
                    miNodoBoton.addEventListener('click', addcarrito);
                    
                    miNodoCardBody.appendChild(miNodoImagen);
                    miNodoCardBody.appendChild(miNodoTitle);
                    miNodoCardBody.appendChild(miNodoPrecio);
                    miNodoCardBody.appendChild(miNodoBoton);
                    miNodo.appendChild(miNodoCardBody);
                    $items.appendChild(miNodo);
                }
            }

            function addcarrito () {
                
                carrito.push(this.getAttribute('marcador'))
                
                calcularTotal();
                
                renderizarCarrito();
            }

            function renderizarCarrito() {
               
                $carrito.textContent = '';
                
                let carritoSinDuplicados = [...new Set(carrito)];
                
                carritoSinDuplicados.forEach(function (item, indice) {
                    
                    let miItem = datos.filter(function(itemBaseDatos) {
                        return itemBaseDatos['id'] == item;
                    });
                    
                    let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
                        return itemId === item ? total += 1 : total;
                    }, 0);
                    
                    let miNodo = document.createElement('li');
                    miNodo.classList.add('lista');
                    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombre']} - $ ${miItem[0]['precio']}`;
                    
                    let miBoton = document.createElement('button');
                    miBoton.classList.add('boton');
                    miBoton.textContent = 'X';
                    miBoton.style.marginLeft = '1rem';
                    miBoton.setAttribute('item', item);
                    miBoton.addEventListener('click', borrarItemCarrito);
                    
                    miNodo.appendChild(miBoton);
                    $carrito.appendChild(miNodo);
                })
            }

            function borrarItemCarrito() {
                console.log()
                
                let id = this.getAttribute('item');
                
                carrito = carrito.filter(function (carritoId) {
                    return carritoId !== id;
                });
                
                renderizarCarrito();
                
                calcularTotal();
            }

            function calcularTotal() {
                
                total = 0;
               
                for (let item of carrito) {
                    
                    let miItem = datos.filter(function(itemBaseDatos) {
                        return itemBaseDatos['id'] == item;
                    });
                    total = total + miItem[0]['precio'];
                }
                
                let totalDosDecimales = total.toFixed(2);
               
                $total.textContent = totalDosDecimales;
            }

            function vaciarCarrito() {
                
                carrito = [];
                
                renderizarCarrito();
                calcularTotal();
            }

            
            $botonVaciar.addEventListener('click', vaciarCarrito);

            
            renderItems();
        } 
    