<!-- README.md: TypeScript — Interfaces vs Types + keyof example (contains HTML) -->

# TypeScript: Interfaces vs Types & `keyof` Example

<div>
  <p>This README explains the main differences between <code>interface</code> and <code>type</code> in TypeScript and shows how to use the <code>keyof</code> keyword with examples.</p>
</div>

---

<h2>1️⃣ Differences Between <code>interface</code> and <code>type</code></h2>

<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Interface</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Primary Use</td>
      <td>Describe the shape of objects/classes</td>
      <td>Can describe objects <strong>and</strong> more complex constructs (union, intersection, primitives)</td>
    </tr>
    <tr>
      <td>Extending</td>
      <td>Can extend interfaces and implement in classes</td>
      <td>Can be extended via intersection types</td>
    </tr>
    <tr>
      <td>Declaration Merging</td>
      <td>Supported (multiple declarations merge)</td>
      <td>Not supported</td>
    </tr>
    <tr>
      <td>Flexibility</td>
      <td>Strictly for object-like shapes</td>
      <td>More flexible and powerful (unions, mapped types, etc.)</td>
    </tr>
    <tr>
      <td>Common use</td>
      <td>Prefered for object shapes & public API contracts</td>
      <td>Prefered for utility types, unions, and complex transforms</td>
    </tr>
  </tbody>
</table>

<details>
  <summary>Simple examples</summary>
  
// interface example
interface Person {
  name: string;
}

// type example
type Student = {
  name: string;
  roll: number;
};

</details>




<h2>2️⃣ What is <code>keyof</code> and how to use it?</h2> <p><code>keyof</code> extracts all keys of an object type as a union of string literal types. It's useful for writing type-safe utilities and functions that accept only valid keys of a type.</p> <pre><code class="language-typescript"> // Given an interface interface User { name: string; age: number; email: string; } // keyof extracts "name" | "age" | "email" type UserKeys = keyof User; // "name" | "age" | "email" function getUserValue(obj: User, key: keyof User) { return obj[key]; } const user: User = { name: "Riyad", age: 22, email: "riyad@example.com", }; console.log(getUserValue(user, "email")); // valid // getUserValue(user, "address"); // ❌ Error: "address" is not a key of User </code></pre>
<h2>3️⃣ Quick Summary</h2> <ul> <li><strong>interface</strong> — best for describing object shapes and class contracts; supports declaration merging.</li> <li><strong>type</strong> — more flexible; can describe unions, intersections, primitives, and complex mapped types.</li> <li><strong>keyof</strong> — extracts keys of a type as a union of string literals; useful for type-safe key-based utilities.</li> </ul>
<h2>4️⃣ Copy-ready Code Snippets</h2> <details> <summary>TypeScript snippets (click to expand)</summary>

// interface vs type
interface Person {
  name: string;
}

type Student = {
  name: string;
  roll: number;
};

// keyof example
interface User {
  name: string;
  age: number;
  email: string;
}

type UserKeys = keyof User; // "name" | "age" | "email"

function getUserValue(obj: User, key: keyof User) {
  return obj[key];
}
</details>
<p>If you want this README converted to pure HTML file, or want a shorter LinkedIn-sized post version, tell me which one and I’ll generate it right away.</p> ```
