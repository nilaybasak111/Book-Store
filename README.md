# My Book Store

#### My Book Store Workflow

This is an **Online Book Store** website. On this website, the user can create an account. After logging in, the user gets access to the **Free and Paid Courses**. Without logging in, users can visit free courses only.

## 🔗 Visit My Book Store

[🌐 **My Book Store**](https://my-book-store-cgxg.onrender.com/)

#### Models-

- User Model => This Model Handels All Users and Their SignUp, Login, Logout functionalities.
- Book Model => This Model Handel All Books and Their Creation, Updation, Deletion, etc.

#### Routes-

**User Routes**-

- **SignUp** (POST) => **url**- "/user/signup", Create a New Account. Here we use bcrypt.js for password hashing.
- **Login** (POST) => **url**- "/user/login", Log in to an Existing Account.

**Book Routes**-

- **Get/See all Books** (GET) => **url**- "/todo", Only Login user can see **Paid and Free Courses**.


## Code Guide / Installation-

- Clone files from Git repository.

```bash
  git clone https://github.com/nilaybasak111/My-Book-Store.git
```

- Then Install all node modules

```bash
  npm install
```

- Rename the .env.example file to .env. And add MongoDB url in .env file.
- Then run this command to create a dist folder

```bash
  npm run build
```

- Then start the project using this command

```bash
  npm run dev
```

Or

```bash
  npm run start
```

#### For More Information Please Visit the Code and The Image of the My Book Online Store Workflow.png

# Improvement Scopes -

- Use Authentication
- We are putting courses data using app like Postman. Create frontend to create new courses.