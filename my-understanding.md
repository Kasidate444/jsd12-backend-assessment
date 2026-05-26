# My Understanding

## Submission Links

**Loom Video (must be set to public — anyone with the link):**
[paste your Loom video URL here]

---

## Questions

Answer each question in your own words. There are no trick questions.

The goal is not a perfect answer — it is an honest one. Write as if you are explaining to a friend who has never used Express. Completing this will prepare you for your video walkthrough.

Do not copy from documentation, your code comments, or AI output. If you are unsure about something, write what you do understand and note where the gap is.

---

**1. What does each HTTP method in your API mean — GET, POST, PUT or PATCH, and DELETE? Why do we use different methods instead of just using POST for everything?**

_Your answer:_

GET meaning ask for seeing all data.
POST meaning submit some data after created.
PUT/PATCH meaning updating some/all data.
DELETE meaning delete data what you select it.

In my understanding, It is a convention and better for using in globally.

---

**2. What is `express.json()` and what would happen if you left it out?**

_Your answer:_

It is the middleware.

Can not run the program.

---

**3. What is the difference between `req.body`, `req.params`, and `req.query`? Give a real example from your API for each one.**

_Your answer:_

req.body : It's look like asking data from browser for using at get and post method.

req.parms : Using at put method for updating data.

req.query : I am not sure how to use it.

---

**4. What are HTTP status codes? List every status code you used in your API and explain why you chose it for that situation.**

_Your answer:_

It is the code number for easy to communicate in this industrial.

200 : everything is fine.

201 :

400 :

404 : page not found.

500 :

---

**5. What is middleware? Describe what it does in your own words and give one example from your code.**

_Your answer:_

It is the function

---

**6. Why does the order of middleware matter in Express? What could go wrong if it were in the wrong order?**

_Your answer:_

Because it able to have many middlewares that working following priority.

---

**7. Walk through what happens on the server, step by step, when a POST request is sent to `/products`.**

_Your answer:_

HTTP POST checking the content type(Rest ful extension) and then program go to router post function and working following precess.

---

**8. What is CRUD? Map each operation to the HTTP method and route you used in your API.**

_Your answer:_

Create seem like Post method in http

Read seem like Get methode in http

Update seem like Put/Patch method in http

Delete same as Delete method in http

---

**9. How does your API respond when something goes wrong — for example, when a product with a given ID does not exist?**

_Your answer:_

The program will checking method of http and then check the criteria that maker has written.

---

**10. What was the hardest part of building this API and what did you do to get past it?**

_Your answer:_

In my opinion, nothing hard but the time not enough for me 🤣
Because I think I am not fast learner.
