(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{555:function(e,t,a){"use strict";a.r(t);var r=a(12),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),a("p",[e._v("TypeScript 的官方文档早已更新，但我能找到的中文文档都还停留在比较老的版本。所以对其中新增以及修订较多的一些章节进行了翻译整理。")]),e._v(" "),a("p",[e._v("本篇整理自 TypeScript Handbook 中 「"),a("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/2/basic-types.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Basics"),a("OutboundLink")],1),e._v("」 章节。")]),e._v(" "),a("p",[e._v("本文并不严格按照原文翻译，对部分内容也做了解释补充。")]),e._v(" "),a("h2",{attrs:{id:"正文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正文"}},[e._v("#")]),e._v(" 正文")]),e._v(" "),a("p",[e._v("JavaScript 的每个值执行不同的操作时会有不同的行为。这听起来有点抽象，所以让我们举个例子，假设我们有一个名为 "),a("code",[e._v("message")]),e._v(" 的变量，试想我们可以做哪些操作：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Accessing the property 'toLowerCase'\n// on 'message' and then calling it\nmessage.toLowerCase();\n// Calling 'message'\nmessage();\n")])])]),a("p",[e._v("第一行代码是获取属性 "),a("code",[e._v("toLowerCase")]),e._v(" ，然后调用它。第二行代码则是直接调用 "),a("code",[e._v("message")]),e._v(" 。")]),e._v(" "),a("p",[e._v("但其实我们连 "),a("code",[e._v("message")]),e._v(" 的值都不知道呢，自然也不知道这段代码的执行结果。每一个操作行为都先取决于我们有什么样的值。")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("message")]),e._v(" 是可调用的吗？")]),e._v(" "),a("li",[a("code",[e._v("message")]),e._v(" 有一个名为 "),a("code",[e._v("toLowerCase")]),e._v(" 的属性吗？")]),e._v(" "),a("li",[e._v("如果有，"),a("code",[e._v("toLowerCase")]),e._v(" 是可以被调用的吗？")]),e._v(" "),a("li",[e._v("如果这些值都可以被调用，它们会返回什么？")])]),e._v(" "),a("p",[e._v("当我们写 JavaScript 的时候，这些问题的答案我们需要谨记在心，同时还要期望处理好所有的细节。")]),e._v(" "),a("p",[e._v("让我们假设 "),a("code",[e._v("message")]),e._v(" 是这样定义的：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('const message = "Hello World!";\n')])])]),a("p",[e._v("你完全可以猜到这段代码的结果，如果我们尝试运行 "),a("code",[e._v("message.toLowerCase()")]),e._v(" ，我们可以得到这段字符的小写形式。")]),e._v(" "),a("p",[e._v("那第二段代码呢？如果你对 JavaScript 比较熟悉，你肯定知道会报如下错误：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("TypeError: message is not a function\n")])])]),a("p",[e._v("如果我们能避免这样的报错就好了。")]),e._v(" "),a("p",[e._v("当我们运行代码的时候，JavaScript 会在运行时先算出值的类型（type），然后再决定干什么。所谓值的类型，也包括了这个值有什么行为和能力。当然 "),a("code",[e._v("TypeError")]),e._v(" 也会暗示性的告诉我们一点，比如在这个例子里，它告诉我们字符串 "),a("code",[e._v("Hello World")]),e._v(" 不能作为函数被调用。")]),e._v(" "),a("p",[e._v("对于一些值，比如基本值 "),a("code",[e._v("string")]),e._v(" 和 "),a("code",[e._v("number")]),e._v("，我们可以使用 "),a("code",[e._v("typeof")]),e._v(" 运算符确认他们的类型。但是对于其他的比如函数，就没有对应的方法可以确认他们的类型了，举个例子，思考这个函数：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function fn(x) {\n  return x.flip();\n}\n")])])]),a("p",[e._v("我们通过阅读代码可以知道，函数只有被传入一个拥有可调用的 "),a("code",[e._v("flip")]),e._v(" 属性的对象，才会正常执行。但是 JavaScript 在代码执行时，并不会把这个信息体现出来。在 JavaScript 中，唯一可以知道 "),a("code",[e._v("fn")]),e._v(" 在被传入特殊的值时会发生什么，就是调用它，然后看会发生什么。这种行为让你很难在代码运行前就预测代码执行结果，这也意味着当你写代码的时候，你会更难知道你的代码会发生什么。")]),e._v(" "),a("p",[e._v("从这个角度来看，类型就是描述什么样的值可以被传递给 "),a("code",[e._v("fn")]),e._v("，什么样的值则会导致崩溃。JavaScript 仅仅提供了动态类型（dynamic typing），这需要你先运行代码然后再看会发生什么。")]),e._v(" "),a("p",[e._v("替代方案就是使用静态类型系统（static type system），在代码运行之前就预测需要什么样的代码。")]),e._v(" "),a("h2",{attrs:{id:"静态类型检查-static-type-checking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态类型检查-static-type-checking"}},[e._v("#")]),e._v(" 静态类型检查（Static type-checking）")]),e._v(" "),a("p",[e._v("让我们再回想下这个将 "),a("code",[e._v("string")]),e._v(" 作为函数进行调用而产生的 "),a("code",[e._v("TypeError")]),e._v(" ，大部分的人并不喜欢在运行代码的时候得到报错。这些会被认为是 bug。当我们写新代码的时候，我们也尽力避免产生新的 bug。")]),e._v(" "),a("p",[e._v("如果我们添加一点代码，保存文件，然后重新运行代码，就能立刻看到错误，我们可以很快的定位到问题，但也并不总是这样，比如如果我们没有做充分的测试，我们就遇不到可能出错的情况。或者如果我们足够幸运看到了这个错误，我们也许不得不做一个大的重构，然后添加很多不同的代码，才能找出问题所在。")]),e._v(" "),a("p",[e._v("理想情况下，我们应该有一个工具可以帮助我们，在代码运行之前就找到错误。这就是静态类型检查器比如 TypeScript 做的事情。静态类型系统（Static types systems）描述了值应有的结构和行为。一个像 TypeScript 的类型检查器会利用这个信息，并且在可能会出错的时候告诉我们：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const message = \"hello!\";\n \nmessage();\n\n// This expression is not callable.\n// Type 'String' has no call signatures.\n")])])]),a("p",[e._v("在这个例子中，TypeScript 会在运行之前就会抛出错误信息。")]),e._v(" "),a("h2",{attrs:{id:"非异常失败-non-exception-失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非异常失败-non-exception-失败"}},[e._v("#")]),e._v(" 非异常失败（Non-exception 失败）")]),e._v(" "),a("p",[e._v("至今为止，我们已经讨论的都是运行时的错误，所谓运行时错误，就是 JavaScript 会在运行时告诉我们它认为的一些没有意义的事情。这些事情之所以会出现，是因为 "),a("a",{attrs:{href:"https://tc39.github.io/ecma262/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ECMAScript 规范"),a("OutboundLink")],1),e._v("已经明确的声明了这些异常时的行为。")]),e._v(" "),a("p",[e._v("举个例子，规范规定，当调用一个非可调用的东西时应该抛出一个错误。也许听起来像是理所当然的，由此你可能认为，如果获取一个对象不存在的属性也应该抛出一个错误，但是 JavaScript 并不会这样，它不报错，还返回值 "),a("code",[e._v("undefined")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('const user = {\n  name: "Daniel",\n  age: 26,\n};\nuser.location; // returns undefined\n')])])]),a("p",[e._v("一个静态类型需要标记出哪些代码是一个错误，哪怕实际生效的 JavaScript 并不会立刻报错。在 TypeScript 中，下面的代码会产生一个 "),a("code",[e._v("location")]),e._v(" 不存在的报错：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const user = {\n  name: \"Daniel\",\n  age: 26,\n};\n \nuser.location;\n// Property 'location' does not exist on type '{ name: string; age: number; }'.\n")])])]),a("p",[e._v("尽管有时候这意味着你需要在表达的时候上做一些取舍，但目的还是找出我们项目中一些合理的错误。TypeScript 现在已经可以捕获很多合理的错误。")]),e._v(" "),a("p",[e._v("举个例子，比如拼写错误：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('const announcement = "Hello World!";\n \n// How quickly can you spot the typos?\nannouncement.toLocaleLowercase();\nannouncement.toLocalLowerCase();\n \n// We probably meant to write this...\nannouncement.toLocaleLowerCase();\n')])])]),a("p",[e._v("函数未被调用：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function flipCoin() {  // Meant to be Math.random()  return Math.random < 0.5;// Operator '<' cannot be applied to types '() => number' and 'number'.}\n")])])]),a("p",[e._v("基本的逻辑错误：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('const value = Math.random() < 0.5 ? "a" : "b";if (value !== "a") {  // ...} else if (value === "b") {  // This condition will always return \'false\' since the types \'"a"\' and \'"b"\' have no overlap.  // Oops, unreachable}\n')])])]),a("h2",{attrs:{id:"类型工具-types-for-tooling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型工具-types-for-tooling"}},[e._v("#")]),e._v(" 类型工具（Types for Tooling）")]),e._v(" "),a("p",[e._v("TypeScript 不仅在我们犯错的时候，可以找出错误，还可以防止我们犯错。")]),e._v(" "),a("p",[e._v("类型检查器因为有类型信息，可以检查比如说是否正确获取了一个变量的属性。也正是因为有这个信息，它也可以在你输入的时候，列出你可能想要使用的属性。")]),e._v(" "),a("p",[e._v("这意味着 TypeScript 对你编写代码也很有帮助，核心的类型检查器不仅可以提供错误信息，还可以提供代码补全功能。这就是 TypeScript 在工具方面的作用。\n"),a("a",{attrs:{href:"https://camo.githubusercontent.com/a09879141d1fc3a357199a0600161a5f7aa70ea4a04ecef26384e2a9e53b30cd/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f706963747572652f696d6167652e706e67",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://camo.githubusercontent.com/a09879141d1fc3a357199a0600161a5f7aa70ea4a04ecef26384e2a9e53b30cd/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f706963747572652f696d6167652e706e67",alt:"img"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("TypeScript 的功能很强大，除了在你输入的时候提供补全和错误信息。还可以支持“快速修复”功能，即自动的修复错误，重构成组织清晰的代码。同时也支持导航功能，比如跳转到变量定义的地方，或者找到一个给定的变量所有的引用。")]),e._v(" "),a("p",[e._v("所有这些功能都建立在类型检查器上，并且跨平台支持。"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support",target:"_blank",rel:"noopener noreferrer"}},[e._v("有可能你最喜欢的编辑器"),a("OutboundLink")],1),e._v("已经支持了 TypeScript。")]),e._v(" "),a("h2",{attrs:{id:"tsc-typescript-编译器-tsc-the-typescript-compiler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsc-typescript-编译器-tsc-the-typescript-compiler"}},[e._v("#")]),e._v(" "),a("code",[e._v("tsc")]),e._v(" TypeScript 编译器（tsc，the TypeScript compiler）")]),e._v(" "),a("p",[e._v("至今我们只是讨论了类型检查器，但是还一直没有用过。现在让我们了解下我们的新朋友 "),a("code",[e._v("tsc")]),e._v(" —— TypeScript 编译器。首先，我们可以通过 npm 安装它：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install -g typescript\n")])])]),a("blockquote",[a("p",[e._v("这会把 TypeScript 编译器安装在全局，如果你想把 "),a("code",[e._v("tsc")]),e._v(" 安装在一个本地的 "),a("code",[e._v("node_modules")]),e._v(" 中，你也可以使用 npx 或者类似的工具。")])]),e._v(" "),a("p",[e._v("让我们创建一个空文件夹，然后写下我们第一个 TypeScript 程序: "),a("code",[e._v("hello.ts")]),e._v("：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Greets the world.console.log("Hello world!");\n')])])]),a("p",[e._v("注意这里并没有什么多余的修饰，这个 "),a("code",[e._v("hello world")]),e._v(" 项目就跟你用 JavaScript 写是一样的。现在你可以运行 "),a("code",[e._v("tsc")]),e._v(" 命令，执行类型检查：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("tsc hello.ts\n")])])]),a("p",[e._v("现在我们已经运行了 "),a("code",[e._v("tsc")]),e._v("，但是你会发现什么也没有发生。确实如此，因为这里并没有什么类型错误，所以命令行里也不会有任何输出。")]),e._v(" "),a("p",[e._v("但如果我们再次检查一次，我们就会发现，我们得到了一个新的文件。查看一下当前目录，我们会发现 "),a("code",[e._v("hello.ts")]),e._v(" 同级目录下还有一个 "),a("code",[e._v("hello.js")]),e._v("，这就是 "),a("code",[e._v("hello.ts")]),e._v(" 文件编译输出的文件， "),a("code",[e._v("tsc")]),e._v(" 会把 ts 文件编译成一个纯 JavaScript 文件。让我们查看一下编译输出的文件：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// Greets the world.console.log("Hello world!");\n')])])]),a("p",[e._v("在这个例子中，因为 TypeScript 并没有什么要编译处理的内容，所以看起来跟我们写的是一样的。编译器会尽可能输出干净的代码，就像是正常开发者写的那样，当然这并不是容易的事情，但 TypeScript 会坚持这样做，比如保持缩进，注意跨行代码，保留注释等。")]),e._v(" "),a("p",[e._v("如果我们执意要产生一个类型检查错误呢？我们可以这样写 "),a("code",[e._v("hello.ts")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// This is an industrial-grade general-purpose greeter function:function greet(person, date) {  console.log(`Hello ${person}, today is ${date}!`);} greet("Brendan");\n')])])]),a("p",[e._v("此时我们再运行下 "),a("code",[e._v("tsc hello.ts")]),e._v(" 。这次我们会在命令行里得到一个错误：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Expected 2 arguments, but got 1.\n")])])]),a("p",[e._v("TypeScript 告诉我们少传了一个参数给 "),a("code",[e._v("greet")]),e._v(" 函数。")]),e._v(" "),a("p",[e._v("虽然我们编写的是标准的 JavaScript，但 TypeScript 依然可以帮助我们找到代码中的错误，cool~。")]),e._v(" "),a("h2",{attrs:{id:"报错时仍产出文件-emitting-with-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报错时仍产出文件-emitting-with-errors"}},[e._v("#")]),e._v(" 报错时仍产出文件（Emitting with Errors）")]),e._v(" "),a("p",[e._v("在刚才的例子中，有一个细节你可能没有注意到，那就是如果我们打开编译输出的文件，我们会发现文件依然发生了改动。这是不是有点奇怪？"),a("code",[e._v("tsc")]),e._v(" 明明已经报错了，为什么还要再编译文件？这就要讲到 TypeScript 一个核心的观点：大部分时候，你要比 TypeScript 更清楚你的代码。")]),e._v(" "),a("p",[e._v("举个例子，假如你正在把你的代码迁移成 TypeScript，这会产生很多类型检查错误，而你不得不为类型检查器处理掉所有的错误，这时候你就要想了，明明之前的代码可以正常工作，TypeScript 为什么要阻止代码正常运行呢？")]),e._v(" "),a("p",[e._v("所以 TypeScript 并不会阻碍你。当然了，你如果想要 TypeScript 更严厉一些，你可以使用 "),a("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#noEmitOnError",target:"_blank",rel:"noopener noreferrer"}},[e._v("noEmitOnError"),a("OutboundLink")],1),e._v(" 编译选项，试着改下你的 "),a("code",[e._v("hello.ts")]),e._v(" 文件，然后运行 "),a("code",[e._v("tsc")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("tsc --noEmitOnError hello.ts\n")])])]),a("p",[e._v("你会发现 "),a("code",[e._v("hello.ts")]),e._v(" 并不会得到更新。")]),e._v(" "),a("h2",{attrs:{id:"显示类型-explicit-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示类型-explicit-types"}},[e._v("#")]),e._v(" 显示类型（Explicit Types）")]),e._v(" "),a("p",[e._v("直到现在，我们还没有告诉 TypeScript，"),a("code",[e._v("person")]),e._v(" 和 "),a("code",[e._v("date")]),e._v(" 是什么类型，让我们编辑一下代码，告诉 TypeScript，"),a("code",[e._v("person")]),e._v(" 是一个 "),a("code",[e._v("string")]),e._v(" 类型，"),a("code",[e._v("date")]),e._v(" 是一个 "),a("code",[e._v("Date")]),e._v(" 对象。同时我们使用 "),a("code",[e._v("date")]),e._v(" 的 "),a("code",[e._v("toDateString()")]),e._v(" 方法。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function greet(person: string, date: Date) {  console.log(`Hello ${person}, today is ${date.toDateString()}!`);}\n")])])]),a("p",[e._v("我们所做的就是给 "),a("code",[e._v("person")]),e._v(" 和 "),a("code",[e._v("date")]),e._v(" 添加了"),a("strong",[e._v("类型注解（type annotations）")]),e._v("，描述 "),a("code",[e._v("greet")]),e._v(" 函数可以支持传入什么样的值。你可以如此理解这个"),a("strong",[e._v("签名 (signature)")]),e._v("： "),a("code",[e._v("greet")]),e._v(" 支持传入一个 "),a("code",[e._v("string")]),e._v(" 类型的 "),a("code",[e._v("person")]),e._v(" 和一个 "),a("code",[e._v("Date")]),e._v(" 类型的 "),a("code",[e._v("date")]),e._v(" 。")]),e._v(" "),a("p",[e._v("添加类型注解后，TypeScript 就可以提示我们，比如说当 "),a("code",[e._v("greet")]),e._v(" 被错误调用时：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function greet(person: string, date: Date) {  console.log(`Hello ${person}, today is ${date.toDateString()}!`);} greet(\"Maddison\", Date());// Argument of type 'string' is not assignable to parameter of type 'Date'.\n")])])]),a("p",[e._v("TypeScript 提示第二个参数有错误，这是为什么呢？")]),e._v(" "),a("p",[e._v("这是因为，在 JavaScript 中调用 "),a("code",[e._v("Date()")]),e._v(" 会返回一个 "),a("code",[e._v("string")]),e._v(" 。使用 "),a("code",[e._v("new Date()")]),e._v(" 才会产生 "),a("code",[e._v("Date")]),e._v(" 类型的值。")]),e._v(" "),a("p",[e._v("我们快速修复下这个问题：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('function greet(person: string, date: Date) {  console.log(`Hello ${person}, today is ${date.toDateString()}!`);} greet("Maddison", new Date());\n')])])]),a("p",[e._v("记住，我们并不需要总是写类型注解，大部分时候，TypeScript 可以自动推断出类型：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('let msg = "hello there!";// let msg: string\n')])])]),a("p",[e._v("尽管我们并没有告诉 TypeScript， "),a("code",[e._v("msg")]),e._v(" 是 "),a("code",[e._v("string")]),e._v(" 类型的值，但它依然推断出了类型。这是一个特性，如果类型系统可以正确的推断出类型，最好就不要手动添加类型注解了。")]),e._v(" "),a("h2",{attrs:{id:"类型抹除-erased-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型抹除-erased-types"}},[e._v("#")]),e._v(" 类型抹除（Erased Types）")]),e._v(" "),a("p",[e._v("上一个例子里的代码，TypeScript 会编译成什么样呢？我们来看一下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"use strict";function greet(person, date) {    console.log("Hello " + person + ", today is " + date.toDateString() + "!");}greet("Maddison", new Date());\n')])])]),a("p",[e._v("注意两件事情：")]),e._v(" "),a("ol",[a("li",[e._v("我们的 "),a("code",[e._v("person")]),e._v(" 和 "),a("code",[e._v("date")]),e._v(" 参数不再有类型注解")]),e._v(" "),a("li",[e._v("模板字符串，即用 ``` 包裹的字符串被转换为使用 "),a("code",[e._v("+")]),e._v(" 号连接")])]),e._v(" "),a("p",[e._v("让我们先看下第一点。类型注解并不是 JavaScript 的一部分。所以并没有任何浏览器或者运行环境可以直接运行 TypeScript 代码。这就是为什么 TypeScript 需要一个编译器，它需要将 TypeScript 代码转换为 JavaScript 代码，然后你才可以运行它。所以大部分 TypeScript 独有的代码会被抹除，在这个例子中，像我们的类型注解就全部被抹除了。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("谨记：类型注解并不会更改程序运行时的行为\n")])])]),a("h2",{attrs:{id:"降级-downleveling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#降级-downleveling"}},[e._v("#")]),e._v(" 降级（Downleveling）")]),e._v(" "),a("p",[e._v("我们再来关注下第二点，原先的代码是：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("`Hello ${person}, today is ${date.toDateString()}!`;\n")])])]),a("p",[e._v("被编译成了:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"Hello " + person + ", today is " + date.toDateString() + "!";\n')])])]),a("p",[e._v("为什么要这样做呢？")]),e._v(" "),a("p",[e._v("这是因为模板字符串是 ECMAScript2015（也被叫做 ECMAScript 6 ,ES2015, ES6 等）里的功能，TypeScript 可将新版本的代码编译为老版本的代码，比如 ECMAScript3 或者 ECMAScript5 。这个将高版本的 ECMAScript 语法转为低版本的过程就叫做"),a("strong",[e._v("降级（downleveling）")]),e._v(" 。")]),e._v(" "),a("p",[e._v("TypeScript 默认转换为 "),a("code",[e._v("ES3")]),e._v("，一个 ECMAScript 非常老的版本。我们也可以使用 "),a("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#target",target:"_blank",rel:"noopener noreferrer"}},[e._v("target"),a("OutboundLink")],1),e._v(" 选项转换为比较新的一些版本，比如执行 "),a("code",[e._v("--target es2015")]),e._v(" 会转换为 ECMAScript 2015, 这意味着转换后的代码可以在任何支持 ECMAScript 2015 的地方运行。")]),e._v(" "),a("p",[e._v("执行 "),a("code",[e._v("tsc --target es2015 hello.ts")]),e._v(" ，让我们看下编译成 ES2015 后的代码：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('function greet(person, date) {  console.log(`Hello ${person}, today is ${date.toDateString()}!`);}greet("Maddison", new Date());\n')])])]),a("blockquote",[a("p",[e._v("尽管默认的目标是 ES3 版本，但是大多数的浏览器都已经支持 ES2015 了，因此大部分开发者可以安全的指定为 ES2015 或者更新的版本，除非你非要兼容某个问题浏览器。")])]),e._v(" "),a("h2",{attrs:{id:"严格模式-strictness"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#严格模式-strictness"}},[e._v("#")]),e._v(" 严格模式（Strictness）")]),e._v(" "),a("p",[e._v("不同的用户使用 TypeScript 会关注不同的事情。一些用户会寻找较为宽松的体验，既可以帮助检查他们程序中的部分代码，也可以享受 TypeScript 的工具功能。这就是 TypeScript 默认的开发体验，类型是可选的，推断会兼容大部分的类型，对有可能是 "),a("code",[e._v("null")]),e._v("/ "),a("code",[e._v("undefined")]),e._v(" 值也不做强制检查。就像 tsc 在编译报错时依然会输出文件，这些默认选项并不会阻碍你的开发。如果你正在迁移 JavaScript 代码，最一开始就可以使用这种方式。")]),e._v(" "),a("p",[e._v("与之形成鲜明对比的是，还有很多用户希望 TypeScript 尽可能多地检查代码，这就是为什么这门语言会提供严格模式设置。但不同于切换开关的形式（要么检查要么不检查），TypeScript 提供的形式更像是一个刻度盘，你越是转动它，TypeScript 就会检查越多的内容。这需要一点额外的工作，但是是值得的，它可以带来更全面的检查和更准确的工具功能。如果可能的话，新项目应该始终开启这些严格设置。")]),e._v(" "),a("p",[e._v("TypeScript 有几个严格模式设置的开关。除非特殊说明，文档里的例子都是在严格模式下写的。CLI 里的 "),a("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig/#strict",target:"_blank",rel:"noopener noreferrer"}},[e._v("strict"),a("OutboundLink")],1),e._v(" 配置项，或者 "),a("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("tsconfig.json"),a("OutboundLink")],1),e._v(" 中的 "),a("code",[e._v('"strict": true')]),e._v(" 可以同时开启，也可以分开设置。在这些设置里，你最需要了解的是 "),a("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#noImplicitAny",target:"_blank",rel:"noopener noreferrer"}},[e._v("noImplicitAny"),a("OutboundLink")],1),e._v(" 和 "),a("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#strictNullChecks",target:"_blank",rel:"noopener noreferrer"}},[e._v("strictNullChecks"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"noimplicitany"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noimplicitany"}},[e._v("#")]),e._v(" "),a("code",[e._v("noImplicitAny")])]),e._v(" "),a("p",[e._v("在某些时候，TypeScript 并不会为我们推断类型，这时候就会回退到最宽泛的类型："),a("code",[e._v("any")]),e._v(" 。这倒不是最糟糕的事情，毕竟回退到 "),a("code",[e._v("any")]),e._v("就跟我们写 JavaScript 没啥一样了。")]),e._v(" "),a("p",[e._v("但是，经常使用 "),a("code",[e._v("any")]),e._v(" 有违背我们使用 TypeScript 的目的。你程序使用的类型越多，你在验证和工具上得到的帮助就会越多，这也意味着写代码的时候会遇到更少的 bug。启用 "),a("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#noImplicitAny",target:"_blank",rel:"noopener noreferrer"}},[e._v("noImplicitAny"),a("OutboundLink")],1),e._v(" 配置项后，当类型被隐式推断为 "),a("code",[e._v("any")]),e._v(" 时，会抛出一个错误。")]),e._v(" "),a("h2",{attrs:{id:"strictnullchecks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strictnullchecks"}},[e._v("#")]),e._v(" "),a("code",[e._v("strictNullChecks")])]),e._v(" "),a("p",[e._v("默认情况下，像 "),a("code",[e._v("null")]),e._v(" 和 "),a("code",[e._v("undefined")]),e._v(" 这样的值可以赋值给其他的类型。这可以让我们更方面的写一些代码。但是忘记处理 "),a("code",[e._v("null")]),e._v(" 和 "),a("code",[e._v("undefined")]),e._v(" 也导致了不少的 bug，甚至有些人会称呼它为"),a("a",{attrs:{href:"https://www.youtube.com/watch?v=ybrQvs4x0Ps",target:"_blank",rel:"noopener noreferrer"}},[e._v("价值百万的错误"),a("OutboundLink")],1),e._v("！ "),a("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#strictNullChecks",target:"_blank",rel:"noopener noreferrer"}},[e._v("strictNullChecks"),a("OutboundLink")],1),e._v(" 选项会让我们更明确的处理 "),a("code",[e._v("null")]),e._v(" 和 "),a("code",[e._v("undefined")]),e._v("，也会让我们免于忧虑是否忘记处理 "),a("code",[e._v("null")]),e._v(" 和 "),a("code",[e._v("undefined")]),e._v(" 。")]),e._v(" "),a("h2",{attrs:{id:"typescript-系列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-系列"}},[e._v("#")]),e._v(" TypeScript 系列")]),e._v(" "),a("p",[e._v("TypeScript 系列文章由官方文档翻译、重难点解析、实战技巧三个部分组成，涵盖入门、进阶、实战，旨在为你提供一个系统学习 TS 的教程，全系列预计 40 篇左右。"),a("a",{attrs:{href:"https://mqyqingfeng.github.io/learn-typescript/",target:"_blank",rel:"noopener noreferrer"}},[e._v("点此浏览全系列文章，并建议顺便收藏站点。"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("微信：「mqyqingfeng」，加我进冴羽唯一的读者群。")]),e._v(" "),a("p",[e._v("如果有错误或者不严谨的地方，请务必给予指正，十分感谢。如果喜欢或者有所启发，欢迎 star，对作者也是一种鼓励。")])])}),[],!1,null,null,null);t.default=s.exports}}]);