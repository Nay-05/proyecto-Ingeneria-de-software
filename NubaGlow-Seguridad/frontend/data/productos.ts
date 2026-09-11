// Datos "de mentira" (mock data): reemplazan a la base de datos
// mientras esta entrega solo sea la interfaz visual.

export type Producto = {
  id: string;
  nombre: string;
  marca: string;
  categoria: "Skincare" | "Maquillaje" | "Cabello" | "Perfumería";
  tipoPiel: "Seca" | "Grasa" | "Mixta" | "Sensible" | "Todo tipo";
  precio: number;
  stock: number;
  imagen: string;
};

export const productos: Producto[] = [
  {
    id: "p1",
    nombre: "Sérum de Ácido Hialurónico",
    marca: "Nuba Skin",
    categoria: "Skincare",
    tipoPiel: "Seca",
    precio: 89,
    stock: 14,
    imagen: "/imagenes/1.jpg",
  },
  {
    id: "p2",
    nombre: "Base Líquida Matte",
    marca: "Nuba Glow",
    categoria: "Maquillaje",
    tipoPiel: "Grasa",
    precio: 120,
    stock: 3,
    imagen: "/imagenes/2.jpg",
  },
  {
    id: "p3",
    nombre: "Protector Solar FPS 50",
    marca: "Nuba Skin",
    categoria: "Skincare",
    tipoPiel: "Todo tipo",
    precio: 75,
    stock: 22,
    imagen: "/imagenes/3.jpg",
  },
  {
    id: "p4",
    nombre: "Paleta de Sombras Rosé",
    marca: "Nuba Glow",
    categoria: "Maquillaje",
    tipoPiel: "Todo tipo",
    precio: 145,
    stock: 8,
    imagen: "/imagenes/4.jpg",
  },
  {
    id: "p5",
    nombre: "Shampoo Reparador",
    marca: "Nuba Hair",
    categoria: "Cabello",
    tipoPiel: "Todo tipo",
    precio: 55,
    stock: 2,
    imagen: "/imagenes/5.jpg",
  },
  {
    id: "p6",
    nombre: "Perfume Bloom 50ml",
    marca: "Nuba Essence",
    categoria: "Perfumería",
    tipoPiel: "Todo tipo",
    precio: 210,
    stock: 6,
    imagen: "/imagenes/6.jpg",
  },
];

export type Pedido = {
  id: string;
  cliente: string;
  ciudad: string;
  estado: "Pendiente" | "En preparación" | "En tránsito" | "Entregado";
  total: number;
  fecha: string;
};

export const pedidos: Pedido[] = [
  { id: "NB-1042", cliente: "Camila R.", ciudad: "Sucre", estado: "En tránsito", total: 165, fecha: "08/09/2026" },
  { id: "NB-1041", cliente: "Valeria M.", ciudad: "La Paz", estado: "En preparación", total: 89, fecha: "08/09/2026" },
  { id: "NB-1040", cliente: "Daniela P.", ciudad: "Santa Cruz", estado: "Entregado", total: 245, fecha: "07/09/2026" },
  { id: "NB-1039", cliente: "Renata S.", ciudad: "Cochabamba", estado: "Pendiente", total: 75, fecha: "07/09/2026" },
];

export type MensajeChat = {
  autor: "bot" | "usuario";
  texto: string;
};

export const conversacionInicial: MensajeChat[] = [
  { autor: "bot", texto: "¡Hola! Soy tu dermoconsultora virtual de Nuba 🌸 ¿Cómo describirías tu piel: seca, grasa, mixta o sensible?" },
  { autor: "usuario", texto: "Creo que la tengo mixta." },
  { autor: "bot", texto: "Perfecto. Para piel mixta te recomiendo el Sérum de Ácido Hialurónico y el Protector Solar FPS 50 para tu rutina de día." },
];
