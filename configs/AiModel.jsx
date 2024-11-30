const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const GenerateCourseLayout_AI = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        { text: "Generate A Course Tutorial on Following Detail With field Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic:Python, Level:Basic, Duration:1 hours, NoOf Chapters:5, in JSON format\n" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n{\n  \"courseName\": \"Introduction to Python Programming\",\n  \"description\": \"This introductory course provides a foundational understanding of Python programming.  You will learn the basics of syntax, data types, control flow, and fundamental programming concepts.  This course is designed for beginners with little to no prior programming experience.\",\n  \"chapters\": [\n    {\n      \"chapterName\": \"Setting Up Your Python Environment\",\n      \"about\": \"This chapter covers installing Python, setting up your development environment (including choosing an IDE or text editor), and running your first Python program. We'll explore different ways to execute Python code and troubleshoot common installation issues.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapterName\": \"Basic Syntax and Data Types\",\n      \"about\": \"This chapter introduces fundamental Python syntax, including variables, operators, comments, and basic data types like integers, floats, strings, and booleans. You'll learn how to work with these data types and perform basic operations.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"chapterName\": \"Control Flow: Conditional Statements and Loops\",\n      \"about\": \"This chapter covers conditional statements (if, elif, else) and loops (for and while). You'll learn how to control the flow of your programs based on certain conditions and repeat blocks of code.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"chapterName\": \"Data Structures: Lists and Dictionaries\",\n      \"about\": \"This chapter introduces two fundamental data structures: lists and dictionaries. You'll learn how to create, manipulate, and use these structures to organize and work with collections of data.\",\n      \"duration\": \"10 minutes\"\n    },\n    {\n      \"chapterName\": \"Functions and Modules\",\n      \"about\": \"This chapter introduces the concept of functions, which allow you to organize your code into reusable blocks.  We'll also explore how to use built-in and external modules to extend the capabilities of your programs.\",\n      \"duration\": \"5 minutes\"\n    }\n  ],\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"totalDuration\": \"1 hour\" \n}\n```\n" },
      ],
    },
    {
      role: "user",
      parts: [
        { text: "you forgot Numberofchapters and its duration not total duration\n" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "You are absolutely right! My apologies. Here's the corrected JSON:\n\n```json\n{\n  \"courseName\": \"Introduction to Python Programming\",\n  \"description\": \"This introductory course provides a foundational understanding of Python programming.  You will learn the basics of syntax, data types, control flow, and fundamental programming concepts.  This course is designed for beginners with little to no prior programming experience.\",\n  \"chapters\": [\n    {\n      \"chapterName\": \"Setting Up Your Python Environment\",\n      \"about\": \"This chapter covers installing Python, setting up your development environment (including choosing an IDE or text editor), and running your first Python program. We'll explore different ways to execute Python code and troubleshoot common installation issues.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapterName\": \"Basic Syntax and Data Types\",\n      \"about\": \"This chapter introduces fundamental Python syntax, including variables, operators, comments, and basic data types like integers, floats, strings, and booleans. You'll learn how to work with these data types and perform basic operations.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"chapterName\": \"Control Flow: Conditional Statements and Loops\",\n      \"about\": \"This chapter covers conditional statements (if, elif, else) and loops (for and while). You'll learn how to control the flow of your programs based on certain conditions and repeat blocks of code.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"chapterName\": \"Data Structures: Lists and Dictionaries\",\n      \"about\": \"This chapter introduces two fundamental data structures: lists and dictionaries. You'll learn how to create, manipulate, and use these structures to organize and work with collections of data.\",\n      \"duration\": \"10 minutes\"\n    },\n    {\n      \"chapterName\": \"Functions and Modules\",\n      \"about\": \"This chapter introduces the concept of functions, which allow you to organize your code into reusable blocks.  We'll also explore how to use built-in and external modules to extend the capabilities of your programs.\",\n      \"duration\": \"5 minutes\"\n    }\n  ],\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"noOfChapters\": 5,\n  \"totalDuration\": \"1 hour\" \n}\n```\n\nI've added `\"noOfChapters\": 5` and kept `\"totalDuration\": \"1 hour\"`  as a summary.  The individual chapter durations still add up to an hour.\n" },
      ],
    },
  ],
});

export const GenerateChapterContent = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {text: "Explain the concept in Detail on Topic:python basic, Chapter: Variables and Datatypes in JSON Format with list of array with field as title, description in detail, Code Example(Code field in <precode> format) if applicable"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n{\n  \"title\": \"Python Basics: Variables and Data Types\",\n  \"description\": \"This chapter introduces fundamental concepts of variables and data types in Python.  Variables are used to store data, and data types define the kind of values a variable can hold. Python is dynamically typed, meaning you don't explicitly declare a variable's type; the interpreter infers it based on the assigned value.\",\n  \"sections\": [\n    {\n      \"title\": \"Variables\",\n      \"description\": \"Variables are named storage locations in memory that hold data.  They are created when you assign a value to them. Variable names must start with a letter or underscore and can contain letters, numbers, and underscores.  Python is case-sensitive (e.g., `myVar` and `myvar` are different variables).\",\n      \"codeExample\": \"<precode>my_integer = 10\\nmy_float = 3.14\\nmy_string = \\\"Hello, world!\\\"\\nmy_boolean = True\\n</precode>\"\n    },\n    {\n      \"title\": \"Data Types\",\n      \"description\": \"Python supports several built-in data types. The most common are:\",\n      \"subsections\": [\n        {\n          \"title\": \"Numeric Types\",\n          \"description\": \"Used to represent numbers.  Includes integers (`int`), floating-point numbers (`float`), and complex numbers (`complex`).\",\n          \"codeExample\": \"<precode>integer_var = 15\\nfloat_var = 2.718\\ncomplex_var = 2 + 3j\\n</precode>\"\n        },\n        {\n          \"title\": \"String Type\",\n          \"description\": \"Used to represent text.  Strings are enclosed in single (' ') or double (\\\" \\\") quotes.\",\n          \"codeExample\": \"<precode>string_var = 'This is a string.'\\nmultiline_string = '''This is a\\nmultiline string.'''\\n</precode>\"\n        },\n        {\n          \"title\": \"Boolean Type\",\n          \"description\": \"Represents truth values: `True` or `False`.\",\n          \"codeExample\": \"<precode>boolean_var = True\\n</precode>\"\n        },\n        {\n          \"title\": \"Sequence Types\",\n          \"description\": \"Ordered collections of items.  Key sequence types are lists and tuples.\",\n          \"subsections\": [\n            {\n              \"title\": \"Lists\",\n              \"description\": \"Mutable (changeable) sequences of items.  Defined using square brackets `[]`.\",\n              \"codeExample\": \"<precode>my_list = [1, 2, 'a', 'b', True]\\nmy_list.append(3) #Adding an element\\nprint(my_list) # Output: [1, 2, 'a', 'b', True, 3]\\n</precode>\"\n            },\n            {\n              \"title\": \"Tuples\",\n              \"description\": \"Immutable (unchangeable) sequences of items. Defined using parentheses `()`.\",\n              \"codeExample\": \"<precode>my_tuple = (1, 2, 'a', 'b', True)\\n#my_tuple[0] = 5 # This will raise an error because tuples are immutable\\n</precode>\"\n            }\n          ]\n        },\n        {\n          \"title\": \"Dictionary Type\",\n          \"description\": \"Unordered collections of key-value pairs.  Keys must be immutable (e.g., strings, numbers, tuples), and values can be of any type. Defined using curly braces `{}`.\",\n          \"codeExample\": \"<precode>my_dict = {'name': 'Alice', 'age': 30, 'city': 'New York'}\\nprint(my_dict['name']) # Output: Alice\\n</precode>\"\n        },\n        {\n          \"title\": \"Set Type\",\n          \"description\": \"Unordered collections of unique items.  Defined using curly braces `{}` or the `set()` function.\",\n          \"codeExample\": \"<precode>my_set = {1, 2, 2, 3} # Duplicates are automatically removed\\nprint(my_set) # Output: {1, 2, 3}\\n</precode>\"\n        }\n      ]\n    },\n    {\n      \"title\": \"Type Conversion\",\n      \"description\": \"You can convert values from one data type to another using built-in functions like `int()`, `float()`, `str()`, `bool()`, etc.\",\n      \"codeExample\": \"<precode>x = 10\\ny = str(x)  # Convert integer to string\\nprint(type(y)) # Output: <class 'str'>\\nz = int('25') # Convert string to integer\\nprint(type(z)) # Output: <class 'int'>\\n</precode>\"\n    }\n  ]\n}\n```\n"},
      ],
    },
  ],
});


// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());

