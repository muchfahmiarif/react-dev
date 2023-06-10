<h1 style="text-align: center">React 18</h1>

This project is a simple example of how to use React 18 with the new documentation from [react](https://react.dev/) and this project learn from [Avip Code Studio](https://www.youtube.com/@vipcodestudio).

**Documentations that used in this project** :
1. [Old Documentation React](https://legacy.reactjs.org/)
2. [New Documentation React](https://react.dev/)
3. [Vite](https://vitejs.dev/)
4. [Tailwind CSS](https://tailwindcss.com/)
5. [Atomic Design](https://atomicdesign.bradfrost.com/)
6. [React Router](https://reactrouter.com/)

## Components and Props
Penamaan komponent di React menggunakan huruf kapital pada awal kata (CamelCase). Contoh: `HelloWorld.js`. Komponen dapat dibuat dengan menggunakan function atau class. Komponen dapat menerima props sebagai parameter. Props adalah data yang dikirimkan dari komponen lain. Props bersifat read-only, artinya tidak dapat diubah di komponen yang menerimanya. Contoh: `props.name`.

Class Component tidak direkomendasikan lagi untuk membuat komponen. Class Component hanya digunakan untuk membuat komponen yang memiliki state (stateful component = buat component menggunakan class).

Functional Component digunakan untuk membuat komponen yang tidak memiliki state (stateless component = buat component dengan function). Functional Component lebih ringkas dan mudah dibaca.

## Atomic Design
Atomic Design adalah metodologi untuk membuat desain sistem yang terdiri dari komponen-komponen yang dapat digunakan kembali. Atomic Design terdiri dari 5 level:
1. Atoms
2. Molecules
3. Organisms
4. Templates
5. Pages

Struktur folder Atomic Design:
```
src
├── components
│   ├── atoms (1)
│   ├── molecules (2)
│   ├── organisms (3)
│   ├── templates (4)
│   └── pages (5)
└── App.jsx
```

Untuk pendekatan engineering, penamaan struktur folder dapat disesuaikan dengan kebutuhan. Contoh:
```
src
├── components
│   ├── Elements (1 dan 2)
│   ├── Fragments (3)
│   ├── Layouts (4)
│   └── Pages (5)
└── App.jsx
```

## Conditional Rendering
Conditional rendering dapat menggunakan 2 metode yang dengan ternary operation dan logical &&. Ternary operation digunakan untuk conditional rendering yang sederhana. Logical && digunakan untuk conditional rendering yang kompleks.
Contoh pada ternary operation:
```jsx
{props.isLogin ? <p>Ini adalah halaman profile</p> : <p>Ini adalah halaman login</p>}
```
sedangkan contoh pada logical &&:
```jsx
{props.isLogin && <p>Ini adalah halaman profile</p>}
```
Pada ternary operation hanya dapat melakukan conditional rendering dengan 2 kondisi, sedangkan pada logical && jika kondisi bernilai false maka tidak akan merender apapun.