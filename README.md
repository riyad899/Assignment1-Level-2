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

```ts
// interface example
interface Person {
  name: string;
}

// type example
type Student = {
  name: string;
  roll: number;
};
