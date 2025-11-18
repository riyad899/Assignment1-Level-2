টাইপস্ক্রিপ্ট: ইন্টারফেস বনাম টাইপ এবং keyof-এর উদাহরণ
<div> <p>এই রিডমি-তে টাইপস্ক্রিপ্টে <code>interface</code> এবং <code>type</code>-এর মধ্যে প্রধান পার্থক্যগুলো ব্যাখ্যা করা হয়েছে এবং <code>keyof</code> কীওয়ার্ডটি কীভাবে ব্যবহার করা হয় তা উদাহরণসহ দেখানো হয়েছে।</p> </div>

<h2>১. <code>interface</code> এবং <code>type</code> এর মধ্যে পার্থক্য</h2>

<table> <thead> <tr> <th>বৈশিষ্ট্য (Feature)</th> <th>ইন্টারফেস (Interface)</th> <th>টাইপ (Type)</th> </tr> </thead> <tbody> <tr> <td>প্রাথমিক ব্যবহার (Primary Use)</td> <td>অবজেক্ট/ক্লাসের আকৃতি বর্ণনা করে (Describe the shape of objects/classes)</td> <td>অবজেক্ট <strong>এবং</strong> আরও জটিল গঠন (ইউনিয়ন, ইন্টারসেকশন, প্রিমিটিভস) বর্ণনা করতে পারে (Can describe objects <strong>and</strong> more complex constructs (union, intersection, primitives))</td> </tr> <tr> <td>এক্সটেন্ড করা (Extending)</td> <td>অন্যান্য ইন্টারফেস এক্সটেন্ড করতে এবং ক্লাসে ইমপ্লিমেন্ট করতে পারে (Can extend interfaces and implement in classes)</td> <td>ইন্টারসেকশন (&) টাইপের মাধ্যমে এক্সটেন্ড করা যায় (Can be extended via intersection types)</td> </tr> <tr> <td>ডিক্লারেশন মার্জিং (Declaration Merging)</td> <td>সমর্থিত (একাধিক ডিক্লারেশন একত্রিত হয়) (Supported (multiple declarations merge))</td> <td>সমর্থিত নয় (Not supported)</td> </tr> <tr> <td>নমনীয়তা (Flexibility)</td> <td>কঠোরভাবে অবজেক্টের মতো আকারের জন্য (Strictly for object-like shapes)</td> <td>আরও নমনীয় এবং শক্তিশালী (ইউনিয়ন, ম্যাপড টাইপস ইত্যাদি) (More flexible and powerful (unions, mapped types, etc.))</td> </tr> <tr> <td>সাধারণ ব্যবহার (Common use)</td> <td>অবজেক্টের আকার এবং পাবলিক এপিআই চুক্তির জন্য পছন্দের (Prefered for object shapes & public API contracts)</td> <td>ইউটিলিটি টাইপ, ইউনিয়ন এবং জটিল রূপান্তরের জন্য পছন্দের (Prefered for utility types, unions, and complex transforms)</td> </tr> </tbody> </table>

<details> <summary>সাধারণ উদাহরণ (Simple examples)</summary>

// interface example interface Person { name: string; }

// type example type Student = { name: string; roll: number; };

</details>

<h2>২. <code>keyof</code> কী এবং এটি কীভাবে ব্যবহার করবেন?</h2> <p><code>keyof</code> একটি অবজেক্ট টাইপের সমস্ত কী-কে স্ট্রিং লিটারেল টাইপের একটি ইউনিয়ন হিসাবে বের করে আনে। টাইপ-সেফ ইউটিলিটি এবং ফাংশন লেখার জন্য এটি উপযোগী, যা শুধুমাত্র একটি টাইপের বৈধ কী-গুলি গ্রহণ করে।</p> <pre><code class="language-typescript"> // Given an interface interface User { name: string; age: number; email: string; } // keyof extracts "name" | "age" | "email" type UserKeys = keyof User; // "name" | "age" | "email" function getUserValue(obj: User, key: keyof User) { return obj[key]; } const user: User = { name: "Riyad", age: 22, email: "riyad@example.com", }; console.log(getUserValue(user, "email")); // valid // getUserValue(user, "address"); // ❌ Error: "address" is not a key of User </code></pre>

<h2>৩. সংক্ষিপ্ত সারসংক্ষেপ (Quick Summary)</h2> <ul> <li><strong>interface</strong> — অবজেক্টের আকার এবং ক্লাসের চুক্তি বর্ণনার জন্য সেরা; ডিক্লারেশন মার্জিং সমর্থন করে।</li> <li><strong>type</strong> — আরও নমনীয়; ইউনিয়ন, ইন্টারসেকশন, প্রিমিটিভস এবং জটিল ম্যাপড টাইপ বর্ণনা করতে পারে।</li> <li><strong>keyof</strong> — একটি টাইপের কী-গুলিকে স্ট্রিং লিটারেলের ইউনিয়ন হিসাবে বের করে আনে; টাইপ-সেফ কী-ভিত্তিক ইউটিলিটিগুলির জন্য উপযোগী।</li> </ul>

<h2>৪. সহজে কপি করার জন্য কোড স্নিপেট (Copy-ready Code Snippets)</h2> <details> <summary>TypeScript স্নিপেট (দেখতে ক্লিক করুন)</summary>

// interface vs type interface Person { name: string; }

type Student = { name: string; roll: number; };

// keyof example interface User { name: string; age: number; email: string; }

type UserKeys = keyof User; // "name" | "age" | "email"

function getUserValue(obj: User, key: keyof User) { return obj[key]; }

</details>

<p>আপনি যদি এই রিডমি-কে সম্পূর্ণ এইচটিএমএল ফাইলে রূপান্তর করতে চান, অথবা একটি ছোট লিঙ্কডইন-উপযোগী পোস্ট সংস্করণ চান, তাহলে আমাকে বলুন এবং আমি এখনই তা তৈরি করে দেব।</p>
