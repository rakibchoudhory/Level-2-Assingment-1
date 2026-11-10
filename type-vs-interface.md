Type Alias vs Interface in TypeScript

Introduction

TypeScript-এ type এবং interface দুটোই ব্যবহার করা হয় কোনো ডেটার গঠন বা Structure নির্ধারণ করার জন্য। দুটির কাজ অনেকটা একই রকম হলেও কিছু পার্থক্য রয়েছে। কোন জায়গায় কোনটি ব্যবহার করতে হবে, তা জানা একজন Developer-এর জন্য গুরুত্বপূর্ণ।

Main Discussion

প্রথমে interface সম্পর্কে জানা যাক। এটি সাধারণত কোনো Object-এর কী কী Property থাকবে, তা নির্ধারণ করতে ব্যবহার করা হয়।

interface User {
  name: string;
  age: number;
}

এখানে User Object-এর মধ্যে name অবশ্যই string এবং age number হতে হবে।

অন্যদিকে, type দিয়েও একই কাজ করা যায়।

type User = {
  name: string;
  age: number;
};

এখন প্রশ্ন হলো, তাহলে পার্থক্য কোথায়?

interface ব্যবহার করে অন্য Interface-কে extends করা যায়। আবার একই নামের Interface একাধিকবার লিখলে TypeScript সেগুলোকে একসঙ্গে যুক্ত করতে পারে।

interface Person {
  name: string;
}

interface Student extends Person {
  id: number;
}

অন্যদিকে, type দিয়ে শুধু Object নয়, Union এবং Intersection Type-ও তৈরি করা যায়।

type Status = "active" | "inactive";
type Admin = User & { role: string };

Conclusion

আমার মতে, সাধারণ Object-এর Structure তৈরি করতে interface ব্যবহার করা ভালো। আর Union, Intersection বা বিভিন্ন ধরনের Type তৈরি করতে type বেশ কাজে আসে। তবে দুটোরই নিজস্ব ব্যবহার রয়েছে। কাজের প্রয়োজন বুঝে সঠিকটি বেছে নেওয়াই ভালো।