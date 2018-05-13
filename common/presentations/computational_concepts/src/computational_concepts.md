# Computational Concepts with Scratch

## Coding in Stage 3: {Stream_Title}

### Mr Daniel Hickmott & {Stream_Presenter}

#### Week 1: An Introduction to Scratch

##### {Stream_Date} May 2018

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

```
{sequence_saying_green_flag}
say [Hello] for (2) secs
say [How are you going?] for (2) secs
say [That's good!] for (2) secs
```

---

## The Dancing Cat

Name the program: **"Dancing Cat"**

```
{moving_the_cat}
move (40) steps
move (40) steps
```

Why does the Cat move once?

---

## The Dancing Cat

Add a Pause with a **wait** block

```
{two_movement}
move (40) steps
wait (0.5) secs
move (40) steps
```

---

## The Dancing Cat

```
{move_right_and_back}
move (40) steps
wait (0.5) secs
move (-40) steps
```

Now the Cat moves back and forwards.

---

## Adding Sound: Cat's Meow

```
{playing_sounds_all_at_once}
play sound [meow v]
play sound [meow v]
```

Why does only one "meow" noise play?

---

## Adding Sound: Cat's Meow

```
{playing_sounds_in_sequence}
play sound [meow v] until done
play sound [meow v] until done
```

The sound effects are played one after the other now.

---

## Adding Sound: Drum

In our stack of blocks that move the Cat:

```
{playing_drum_when_cat_moves}
move (40) steps
play drum (1 v) for (0.5) beats
move (-40) steps
play drum (1 v) for (0.5) beats
```

Now the drum plays every time the Cat moves

---

## Concept: Loops

- Computers are very good at repeating actions many times (loops)
- In Syllabus: implement digital solutions as visual programs involving branching, **iteration** and user input (ACTDIP020)
- In Scratch:

```
{loops_example_notes}
repeat (4)
	play note (60 v) for (1) beats
end
```

---

## Loops in Scratch: Dancing Forever

Let's the make the Cat dance forever:

```
{playing_drum_forever}
forever
	move (40) steps
	play drum (1 v) for (0.5) beats
	move (-40) steps
	play drum (1 v) for (0.5) beats
end
```

---

## Loops in Scratch: Repeating the Dance

Using the *repeat* block instead:

```
{playing_drum_repeat}
repeat (2)
	move (40) steps
	play drum (1 v) for (0.5) beats
	move (-40) steps
	play drum (1 v) for (0.5) beats
end
```

Try different numbers in the repeat block, such as **10**, **0** and **-1**.

---

## Nested Repetition

Blocks away from the stack of blocks for the Dancing Cat:

```
{nested_loops_example}
repeat (4)
	repeat(2)
		play drum (1 v) for (1) beats
	end
end
```

What is the **outer loop?** What is the **inner loop?**

---

## Adding a Hi-Hat Noise 

```
{nested_repetition_cat_dancing}
repeat (2)
	repeat (2)
		move (40) steps
		play drum (1 v) for (0.5) beats
		move (-40) steps
		play drum (1 v) for (0.5) beats
	end
	play drum (5 v) for (1) beats
end
```

---

## Concept: Data

- Computers store data and use this data in different ways (e.g. a score in a game)
- In Syllabus: employ appropriate technologies to represent data (ACSIS090, ACSIS107)
- In Scratch:

```
{variables_number_example}
set [number v] to [2]
say (number) for (2) secs
set [number v] to [4]
say (number) for (2) secs
```

---

## Variables as Buckets

![inline](variables_as_buckets.png)

---

## Making a Variable

1. Go to the *Data* blocks section of the *Scripts* tab
2. Click the *Make a Variable* button
3. Name the variable *number of movements*
4. Tick the *For this sprite only* checkbox
5. Click the *OK button*

---

## Counting Steps

```
{dancing_cat_program_with_step_counter}
repeat (2)
	repeat (2)
		move (40) steps
		change [number of movements v] by (1)
		play drum (1 v) for (0.5) beats
		move (-40) steps
		change [number of movements v] by (1)
		play drum (1 v) for (0.5) beats
	end
	play drum (5 v) for (1) beats
end
```

---

##  Resetting our Pedometer

```
{initialising_a_variable}
set [number of movements v] to [0]
repeat (2)
	repeat (2)
		move (40) steps
		change [number of movements v] by (1)
		play drum (1 v) for (0.5) beats
		move (-40) steps
		change [number of movements v] by (1)
		play drum (1 v) for (0.5) beats
	end
	play drum (5 v) for (1) beats
end
```

---

## Concept: Events

- An example of this: **when space key pressed**
- In Syllabus: implement digital solutions as visual programs involving branching, iteration and **user input** (ACTDIP020)
- In Scratch, often called **Hat Blocks**:

```
{event_example_clicked}
when this sprite clicked
	play note (60 v) for (1) beats
```

---

## Start the Dance

```
{starting_the_dance}
when [space v] key pressed
	set [number of movements v] to [0]
	repeat (2)
		repeat (2)
			move (40) steps
			change [number of movements v] by (1)
			play drum (1 v) for (0.5) beats
			move (-40) steps
			change [number of movements v] by (1)
			play drum (1 v) for (0.5) beats
		end
		play drum (5 v) for (1) beats
	end
```

---

## Stop the Dance

```
{stopping_the_dance}
when [x v] key pressed
	stop [all v]
```

---

## Concepts: Events and Data

- A combination of Events and Data: **User Input**
- In Syllabus: implement digital solutions as visual programs involving branching, iteration and **user input** (ACTDIP020)
- In Scratch:

```
{user_input_example_hello}
ask [What is your name?] and wait
say (join [Hello ](answer))
```

---

## Asking a Question

Ask for **number of times** to dance:

```
{asking_number_of_times}
when [space v] key pressed
	set [number of movements v] to [0]
	ask [How many times would you like me to dance?] and wait
	
```

---

## Using the Answer

```
{dancing_the_times}
repeat (answer)
	repeat (2)
		move (40) steps
		change [number of movements v] by (1)
		play drum (1 v) for (0.5) beats
		move (-40) steps
		change [number of movements v] by (1)
		play drum (1 v) for (0.5) beats
	end
	play drum (5 v) for (1) beats
end
```

---

## Concept: Conditionals

- Computers take certain decisions based off the steps we tell them to follow
- In Syllabus: implement digital solutions as visual programs involving **branching**, iteration and user input (ACTDIP020)
- In Scratch:

```
{conditionals_example}
if <touching [Ball v]?> then
	say [Ouch!] for (2) secs
end
``` 

---

## Checking for Negative Numbers

- **Invalid input**
- What happens if we ask the Cat to dance **-1** or **-4** times?

---

## Refusing to Dance

```
{checking_for_negative}
ask [How many times would you like me to dance?] and wait
if <(answer) < (1) > then
	say (join [I can't dance] (join (answer) [times!]))
else
	repeat (answer)
		repeat (2)
			move (40) steps
			change [number of movements v] by (1)
			play drum (1 v) for (0.5) beats
			move (-40) steps
			change [number of movements v] by (1)
			play drum (1 v) for (0.5) beats
		end
		play drum (5 v) for (1) beats
	end
end
```

---

## Nested Conditionals

- Also known as **Nested Branching**
- In Scratch: **if else** blocks within other **if else** blocks
- We will use this to add a limit on the number of times the Cat will dance
- The Cat will refuse to **dance more than 100** times

---

## Getting Worn Out

```
{checking_upper_limit}
if <(answer) < [1] > then
	say (join [I can't dance] (join (answer) [times!]))
else
	if <(answer) > [100] > then
		say [I can't dance that many times! I'll get worn out!] for (2) secs
	else
		repeat (answer)
			repeat (2)
				move (40) steps
				change [number of movements v] by (1)
				play drum (1 v) for (0.5) beats
				move (-40) steps
				change [number of movements v] by (1)
				play drum (1 v) for (0.5) beats
			end
			play drum (5 v) for (1) beats
		end
end
```

---

## Conclusion

- You learned about the following *Computational Concepts*:
	- **Sequences**
	- **Loops**
	- **Data**
	- **Conditionals**

- Also, **User Input** 





