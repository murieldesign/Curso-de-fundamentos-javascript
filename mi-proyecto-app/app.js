// app.js — Plataforma Integrada (Tareas, Carrito, Notas)
// Autor: Generado por ChatGPT
// Fecha: 2025

// ---------------------------
// Utilidades (localStorage)
// ---------------------------
const storage = {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  load(key, fallback) {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  },
  remove(key) {
    localStorage.removeItem(key);
  }
};

// ---------------------------
// Estado inicial (arrays/objetos)
// ---------------------------
let tareas = storage.load('mis_tareas', []);
let productos = [
  { id: 1, nombre: 'Camiseta', precio: 19.99 },
  { id: 2, nombre: 'Libro: JavaScript Básico', precio: 14.5 },
  { id: 3, nombre: 'Auriculares', precio: 39.9 },
  { id: 4, nombre: 'Taza', precio: 7.25 }
];
// carrito: array de objetos { id, nombre, precio, cantidad }
let carrito = storage.load('mi_carrito', []);
// notas: array de objetos { id, titulo, contenido, fecha }
let notas = storage.load('mis_notas', []);

// ---------------------------
// Helpers
// ---------------------------
const $ = (selector) => document.querySelector(selector);
const formatPrecio = (n) => n.toFixed(2).replace('.', ',');

// Generador de id simple
function generarId() {
  return Date.now() + Math.floor(Math.random() * 1000);
}

// ---------------------------
// Módulo Tareas
// ---------------------------
function inicializarTareas() {
  const input = $('#nuevaTarea');
  const btn = $('#agregarTarea');
  const lista = $('#listaTareas');

  function guardar() {
    storage.save('mis_tareas', tareas);
  }

  function renderTareas() {
    lista.innerHTML = '';
    tareas.forEach(t => {
      const li = document.createElement('li');
      li.dataset.id = t.id;
      li.textContent = t.descripcion;
      li.style.cursor = 'pointer';
      if (t.completada) {
        li.style.textDecoration = 'line-through';
        li.classList.add('completada');
      }
      // botón eliminar
      const btnEliminar = document.createElement('button');
      btnEliminar.textContent = 'Eliminar';
      btnEliminar.className = 'btn-eliminar-tarea';
      btnEliminar.style.marginLeft = '10px';

      // botón editar
      const btnEditar = document.createElement('button');
      btnEditar.textContent = 'Editar';
      btnEditar.className = 'btn-editar-tarea';
      btnEditar.style.marginLeft = '6px';

      li.appendChild(btnEditar);
      li.appendChild(btnEliminar);
      lista.appendChild(li);
    });
  }

  function agregarTarea() {
    const texto = input.value.trim();
    if (!texto) {
      alert('La tarea no puede estar vacía.');
      return;
    }
    const nueva = { id: generarId(), descripcion: texto, completada: false };
    tareas.push(nueva);
    input.value = '';
    guardar();
    renderTareas();
  }

  // eventos
  btn.addEventListener('click', agregarTarea);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') agregarTarea();
  });

  // delegación para lista (toggle completada, eliminar, editar)
  lista.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    const id = Number(li.dataset.id);
    // eliminar
    if (e.target.classList.contains('btn-eliminar-tarea')) {
      tareas = tareas.filter(t => t.id !== id);
      guardar();
      renderTareas();
      return;
    }
    // editar
    if (e.target.classList.contains('btn-editar-tarea')) {
      const tarea = tareas.find(t => t.id === id);
      const nuevoTexto = prompt('Editar tarea:', tarea.descripcion);
      if (nuevoTexto !== null) {
        const trimmed = nuevoTexto.trim();
        if (trimmed) {
          tarea.descripcion = trimmed;
          guardar();
          renderTareas();
        } else {
          alert('La tarea no puede quedar vacía.');
        }
      }
      return;
    }
    // toggle completada al hacer click en li (pero no en botones)
    if (e.target.tagName === 'LI' || e.target === li) {
      const tarea = tareas.find(t => t.id === id);
      tarea.completada = !tarea.completada;
      guardar();
      renderTareas();
    }
  });

  // render inicial
  renderTareas();
}

// ---------------------------
// Módulo Carrito de Compras
// ---------------------------
function inicializarCarrito() {
  const listaProductos = $('#listaProductos');
  const listaCarrito = $('#listaCarrito');
  const totalCarrito = $('#totalCarrito');

  function guardar() {
    storage.save('mi_carrito', carrito);
  }

  function renderProductosDisponibles() {
    listaProductos.innerHTML = '';
    productos.forEach(p => {
      const li = document.createElement('li');
      li.dataset.id = p.id;
      li.textContent = `${p.nombre} — € ${formatPrecio(p.precio)}`;

      const btn = document.createElement('button');
      btn.textContent = 'Agregar';
      btn.className = 'btn-agregar-producto';
      btn.style.marginLeft = '10px';

      // input cantidad opcional
      const qtyInput = document.createElement('input');
      qtyInput.type = 'number';
      qtyInput.min = '1';
      qtyInput.value = '1';
      qtyInput.title = 'Cantidad';
      qtyInput.style.width = '50px';
      qtyInput.style.marginLeft = '8px';

      li.appendChild(qtyInput);
      li.appendChild(btn);
      listaProductos.appendChild(li);
    });
  }

  function calcularTotales() {
    const totalCantidad = carrito.reduce((sum, it) => sum + it.cantidad, 0);
    const totalPrecio = carrito.reduce((sum, it) => sum + it.cantidad * it.precio, 0);
    return { totalCantidad, totalPrecio };
  }

  function renderCarrito() {
    listaCarrito.innerHTML = '';
    if (carrito.length === 0) {
      const p = document.createElement('p');
      p.textContent = 'El carrito está vacío.';
      listaCarrito.appendChild(p);
    } else {
      carrito.forEach(item => {
        const li = document.createElement('li');
        li.dataset.id = item.id;
        li.textContent = `${item.nombre} x ${item.cantidad} — € ${formatPrecio(item.precio * item.cantidad)}`;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'btn-eliminar-carrito';
        btnEliminar.style.marginLeft = '10px';

        // botón reducir cantidad
        const btnReducir = document.createElement('button');
        btnReducir.textContent = '-';
        btnReducir.className = 'btn-reducir';
        btnReducir.style.marginLeft = '6px';

        const btnAumentar = document.createElement('button');
        btnAumentar.textContent = '+';
        btnAumentar.className = 'btn-aumentar';
        btnAumentar.style.marginLeft = '6px';

        li.appendChild(btnAumentar);
        li.appendChild(btnReducir);
        li.appendChild(btnEliminar);
        listaCarrito.appendChild(li);
      });
    }

    const { totalCantidad, totalPrecio } = calcularTotales();
    totalCarrito.textContent = `Artículos: ${totalCantidad} — Total: € ${formatPrecio(totalPrecio)}`;
  }

  function agregarAlCarrito(id, cantidad = 1) {
    const prod = productos.find(p => p.id === id);
    if (!prod) return;
    const existente = carrito.find(i => i.id === id);
    if (existente) {
      existente.cantidad += cantidad;
    } else {
      carrito.push({ id: prod.id, nombre: prod.nombre, precio: prod.precio, cantidad });
    }
    guardar();
    renderCarrito();
  }

  // eventos en lista de productos (delegación)
  listaProductos.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-agregar-producto')) {
      const li = e.target.closest('li');
      const id = Number(li.dataset.id);
      const qtyInput = li.querySelector('input[type="number"]');
      let cantidad = 1;
      if (qtyInput) {
        cantidad = parseInt(qtyInput.value, 10);
        if (isNaN(cantidad) || cantidad < 1) cantidad = 1;
      }
      agregarAlCarrito(id, cantidad);
    }
  });

  // eventos en carrito (eliminar, +, -)
  listaCarrito.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    const id = Number(li.dataset.id);
    if (e.target.classList.contains('btn-eliminar-carrito')) {
      carrito = carrito.filter(i => i.id !== id);
      guardar();
      renderCarrito();
      return;
    }
    if (e.target.classList.contains('btn-reducir')) {
      const item = carrito.find(i => i.id === id);
      if (!item) return;
      item.cantidad = Math.max(1, item.cantidad - 1);
      guardar();
      renderCarrito();
      return;
    }
    if (e.target.classList.contains('btn-aumentar')) {
      const item = carrito.find(i => i.id === id);
      if (!item) return;
      item.cantidad += 1;
      guardar();
      renderCarrito();
      return;
    }
  });

  // render inicial
  renderProductosDisponibles();
  renderCarrito();
}

// ---------------------------
// Módulo Notas
// ---------------------------
function inicializarNotas() {
  const inputTitulo = $('#tituloNota');
  const textareaContenido = $('#contenidoNota');
  const btnAgregar = $('#agregarNota');
  const contenedorNotas = $('#listaNotas');

  function guardar() {
    storage.save('mis_notas', notas);
  }

  function crearNotaElement(nota) {
    const card = document.createElement('article');
    card.className = 'nota';
    card.dataset.id = nota.id;

    const h3 = document.createElement('h3');
    h3.textContent = nota.titulo;

    const fecha = document.createElement('small');
    fecha.textContent = new Date(nota.fecha).toLocaleString();

    const p = document.createElement('p');
    p.textContent = nota.contenido;

    const btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    btnEditar.className = 'btn-editar-nota';

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.className = 'btn-eliminar-nota';
    btnEliminar.style.marginLeft = '6px';

    card.appendChild(h3);
    card.appendChild(fecha);
    card.appendChild(p);
    card.appendChild(btnEditar);
    card.appendChild(btnEliminar);

    return card;
  }

  function renderNotas() {
    contenedorNotas.innerHTML = '';
    if (notas.length === 0) {
      const p = document.createElement('p');
      p.textContent = 'No hay notas todavía.';
      contenedorNotas.appendChild(p);
      return;
    }
    notas.slice().reverse().forEach(nota => {
      const el = crearNotaElement(nota);
      contenedorNotas.appendChild(el);
    });
  }

  function agregarNota() {
    const titulo = inputTitulo.value.trim();
    const contenido = textareaContenido.value.trim();
    if (!titulo) {
      alert('El título no puede estar vacío.');
      return;
    }
    if (!contenido) {
      alert('El contenido no puede estar vacío.');
      return;
    }
    const nueva = { id: generarId(), titulo, contenido, fecha: new Date().toISOString() };
    notas.push(nueva);
    inputTitulo.value = '';
    textareaContenido.value = '';
    guardar();
    renderNotas();
  }

  // eventos
  btnAgregar.addEventListener('click', agregarNota);
  textareaContenido.addEventListener('keydown', (e) => {
    // Ctrl+Enter para enviar desde textarea
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      agregarNota();
    }
  });

  // delegación para editar / eliminar notas
  contenedorNotas.addEventListener('click', (e) => {
    const card = e.target.closest('.nota');
    if (!card) return;
    const id = Number(card.dataset.id);
    if (e.target.classList.contains('btn-eliminar-nota')) {
      if (confirm('¿Eliminar esta nota?')) {
        notas = notas.filter(n => n.id !== id);
        guardar();
        renderNotas();
      }
      return;
    }
    if (e.target.classList.contains('btn-editar-nota')) {
      const nota = notas.find(n => n.id === id);
      const nuevoTitulo = prompt('Editar título:', nota.titulo);
      if (nuevoTitulo === null) return;
      const nuevoContenido = prompt('Editar contenido:', nota.contenido);
      if (nuevoContenido === null) return;
      if (!nuevoTitulo.trim() || !nuevoContenido.trim()) {
        alert('Título o contenido no pueden quedar vacíos.');
        return;
      }
      nota.titulo = nuevoTitulo.trim();
      nota.contenido = nuevoContenido.trim();
      nota.fecha = new Date().toISOString();
      guardar();
      renderNotas();
    }
  });

  // render inicial
  renderNotas();
}

// ---------------------------
// Inicialización general
// ---------------------------
document.addEventListener('DOMContentLoaded', () => {
  inicializarTareas();
  inicializarCarrito();
  inicializarNotas();

  // navegación simple con anclas (mejor experiencia)
  document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', (e) => {
      // comportamiento por defecto ya hace scroll a la sección; podrías añadir animación si quieres.
    });
  });
});
