# Computational Concepts with Scratch

## Coding in Stage 3: ScratchMaths

### Mr Daniel Hickmott & Dr Elena Prieto-Rodriguez

#### Week 1: An Introduction to Scratch

##### 14th May 2018

---

## Computational Concepts with Scratch

- Learn about a few key **Computational concepts**
- How these relate to outcomes from Stage 3 syllabus and descriptors in the national curriculum
- I will walk through this activity out the front
- Activity is also available on the session page with the steps
	- **Activities > Computational Concepts with Scratch**

---

## Getting Started

- [scratch.mit.edu](scratch.mit.edu)
- **File > New Project**
- [Dancing Cat](https://scratch.mit.edu/projects/173543499/) 
- **Sequences**, **Loops**, **Events**, **Conditionals** and **Data**

---

## Concept: Sequences

- Computers follow instructions in order and precisely as we tell them
- In Syllabus: develop a **sequence of steps** and decisions (algorithms) to solve a problem (ACTDIP010)
- In Scratch:


![inline 200%](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/sequence_saying_green_flag.png)

---

## The Dancing Cat

Name the program: **"Dancing Cat"**


![inline 250%](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/moving_the_cat.png)

Why does the Cat move once?

---

## The Dancing Cat

Add a Pause with a **wait** block


![inline 250%](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/two_movement.png)

---

## The Dancing Cat


![inline 250%](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/move_right_and_back.png)

Now the Cat moves back and forwards.

---

## Adding Sound: Cat's Meow


![inline 250%](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/playing_sounds_all_at_once.png)

Why does only one "meow" noise play?

---

## Adding Sound: Cat's Meow


![inline 250%](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/playing_sounds_in_sequence.png)

The sound effects are played one after the other now.

---

## Adding Sound: Drum

In our stack of blocks that move the Cat:


![inline 250%](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/playing_drum_when_cat_moves.png)

Now the drum plays every time the Cat moves

---

## Concept: Loops

- Computers are very good at repeating actions many times (loops)
- In Syllabus: implement digital solutions as visual programs involving branching, **iteration** and user input (ACTDIP020)
- In Scratch:


![inline 250%](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/loops_example_notes.png)

---

## Loops in Scratch: Dancing Forever

Let's the make the Cat dance forever:


![inline 250%](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/playing_drum_forever.png)

---

## Loops in Scratch: Repeating the Dance

Using the *repeat* block instead:


![inline 250%](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/playing_drum_repeat.png)

Try different numbers in the repeat block, such as **10**, **0** and **-1**.

---

## Nested Repetition

Blocks away from the stack of blocks for the Dancing Cat:


![inline 250%](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/nested_loops_example.png)

What is the **outer loop?** What is the **inner loop?**

---

## Adding a Hi-Hat Noise 


![inline](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/nested_repetition_cat_dancing.png)

---

## Concept: Data

- Computers store data and use this data in different ways (e.g. a score in a game)
- In Syllabus: employ appropriate technologies to represent data (ACSIS090, ACSIS107)
- In Scratch:


![inline 250%](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/variables_number_example.png)

---

## Variables as Buckets

![inline](https://cs4s.github.io/2018/common/presentations/computational_concepts/variables_as_buckets.png)

---

## Making a Variable

1. Go to the *Data* blocks section of the *Scripts* tab
2. Click the *Make a Variable* button
3. Name the variable *number of movements*
4. Tick the *For this sprite only* checkbox
5. Click the *OK button*

---

## Counting Steps


![inline](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/dancing_cat_program_with_step_counter.png)

---

##  Resetting our Pedometer


![inline](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/initialising_a_variable.png)

---

## Concept: Events

- An example of this: **when space key pressed**
- In Syllabus: implement digital solutions as visual programs involving branching, iteration and **user input** (ACTDIP020)
- In Scratch, often called **Hat Blocks**:


![inline 250%](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/event_example_clicked.png)

---

## Start the Dance


![inline](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/starting_the_dance.png)

---

## Stop the Dance


![inline 250%](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/stopping_the_dance.png)

---

## Concepts: Events and Data

- A combination of Events and Data: **User Input**
- In Syllabus: implement digital solutions as visual programs involving branching, iteration and **user input** (ACTDIP020)
- In Scratch:


![inline 250%](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/user_input_example_hello.png)

---

## Asking a Question

Ask for **number of times** to dance:


![inline 250%](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/asking_number_of_times.png)

---

## Using the Answer


![inline](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/dancing_the_times.png)

---

## Concept: Conditionals

- Computers take certain decisions based off the steps we tell them to follow
- In Syllabus: implement digital solutions as visual programs involving **branching**, iteration and user input (ACTDIP020)
- In Scratch:


![inline](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/conditionals_example.png)


---

## Checking for Negative Numbers

- **Invalid input**
- What happens if we ask the Cat to dance **-1** or **-4** times?

---

## Refusing to Dance


![inline](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/checking_for_negative.png)

---

## Nested Conditionals

- Also known as **Nested Branching**
- In Scratch: **if else** blocks within other **if else** blocks
- We will use this to add a limit on the number of times the Cat will dance
- The Cat will refuse to **dance more than 100** times

---

## Getting Worn Out


![inline](https://cs4s.github.io/2018/common/presentations/computational_concepts/block_images/checking_upper_limit.png)

---

## Conclusion

- You learned about the following *Computational Concepts*:
	- **Sequences**
	- **Loops**
	- **Data**
	- **Conditionals**

- Also, **User Input** 





