Access Modifiers in TypeScript OOP

Introduction

TypeScript-এ Class ব্যবহার করে Object তৈরি করা যায়। একটি Class-এর Property এবং Method কে কোথা থেকে ব্যবহার করা যাবে, তা নিয়ন্ত্রণ করার জন্য Access Modifier ব্যবহার করা হয়। TypeScript-এ প্রধানত public, private, protected এবং readonly ব্যবহার করা হয়।


Main Discussion

প্রথমে public সম্পর্কে জানা যাক। কোনো Property বা Method public হলে Class-এর বাইরে থেকেও সেটি ব্যবহার করা যায়। এটি Default Access Modifier।

class Student {
  public name: string = "Rakib";
}

private ব্যবহার করলে সেই Property শুধু নিজের Class-এর ভেতরে ব্যবহার করা যায়। Class-এর বাইরে থেকে সরাসরি Access করা যায় না।

class Employee {
  private salary: number = 30000;
}

protected অনেকটা private-এর মতো। তবে এর একটি সুবিধা হলো, Parent Class-এর পাশাপাশি Child Class থেকেও এটি ব্যবহার করা যায়।

class Person {
  protected name: string = "Rakib";
}

class Student extends Person {
  showName(): string {
    return this.name;
  }
}

সবশেষে রয়েছে readonly। কোনো Property-তে readonly ব্যবহার করলে সেটির Value একবার নির্ধারণ করার পর আর পরিবর্তন করা যায় না। সাধারণত Constructor-এর মাধ্যমে এর Value দেওয়া যায়।

class User {
  readonly id: number = 101;
}

এই Modifier-গুলো ব্যবহার করলে Class-এর ডেটা নিয়ন্ত্রণ করা সহজ হয় এবং ভুল পরিবর্তন থেকে অনেকটা নিরাপদ থাকা যায়।

Conclusion

TypeScript OOP শেখার জন্য Access Modifier খুবই গুরুত্বপূর্ণ। কখন public, কখন private বা protected ব্যবহার করতে হবে, তা বুঝতে হবে। আর কোনো Property পরিবর্তন করা বন্ধ রাখতে চাইলে readonly ব্যবহার করা যায়।