---
layout: exercises
title: Coding in Stage 3 - ScratchMaths - Week 1
---

# Week 1: An Introduction to Scratch

## Exercises

This page includes some exercises that you can complete to check your understanding of the concepts that you learned about in the Week 1 session of the Coding in Stage 3 program.
The exercises are split into sections for different **computational concepts:** *Sequences*, *Repetition* and *Conditionals*, as well as a section for *User Input*.
The answer to each of the exercises can be viewed by clicking the Answer section after each question.
If you have any questions about these exercises or need further explanations of the answers, please let us know.

## Sequences

### Exercise 1

Look at the Scratch code below, which is in the Scripts Area for a Cat Sprite.

~~~
move (10) steps
move (20) steps
wait (1) secs
move (10) steps
wait (1) secs
move (40) steps
~~~
{: .language-scratch}

When the stack of blocks above is clicked, how many times will the Cat pause before moving again? What is the total number of steps that the Cat will move?

#### Sequences: Exercise 1 Answer

The cat will pause twice (as there is 2 wait blocks) and it will move 80 steps in total (this is 10 + 20 + 40 + 10 from the move blocks).

### Exercise 2

Now the Scratch code is changed to this:

~~~
move (100) steps
move (-100) steps
move (200) steps
move (-200) steps
~~~
{: .language-scratch}

What will happen when the stack of blcoks is clicked? Will the Cat move to the right, then the left, the right and the left again? Or will the Cat appear to not move at all?

#### Sequences: Exercise 2 Answer

The Cat will appear to not move at all. 
This is for two reasons. 
Firstly, we would have to include wait blocks to see the Cat moving around the canvas.
As there is no wait blocks, the Cat runs through all of the move blocks in one movement.
Secondly, if you add up all of the steps (100, -100, 200 and -200) you get 0.
When the Cat moves 0 steps, it doesn't move at all.

### Exercise 3

You ask a student to explain how the Cat moves around the canvas when it follows a stack of Scratch blocks. This is their program:

~~~
change x by (100)
wait (2) secs
change y by (100)
wait (2) secs
change x by (-100)
wait (2) secs
change y by (-100)
~~~
{: .language-scratch}

The student explains that, when the stack of blocks is clicked, the Cat will: *"Move to the right, wait for a couple of seconds, then move up a bit. It will wait again for a couple of seconds, then move to the left. It will wait again and finally move back to where it was at the start."*

Is this explanation correct?

#### Sequences: Exercise 3 Answer

Yes, the student has explained the code correctly.

## Loops

### Exercise 1

Look at the blocks below.

~~~
repeat (4)
	play drum (1 v) for (0.5) beats
end	
~~~
{: .language-scratch}

How many times will the snare drum noise play?

#### Loops: Exercise 1 Answer

As the *repeat* block will repeat 4 times, the snare drum noise will play 4 times.

### Exercise 2

You ask a student to explain what a Sprite will do when you click the stacks below.

~~~
repeat (5)
	move (-10) steps
	wait (1) secs
	move (-10) steps
	wait (1) secs
end
~~~
{: .language-scratch}

The student says that the Sprite will move to the right 5 times when you click on the stack of the blocks.
This is an incorrect explanation of the above blocks for two reasons, why is that and what will actually happen?

#### Loops: Exercise 2 Answer

The student is incorrect for two reasons:

1.	The Cat will move to the left (move -10 means move 10 steps to the left)
2.	The Cat will move 10 times in total, not 5

The Cat will actually move towards the left 10 times.

### Exercise 3

Look at the blocks below, which are in the Scripts Area for a Sprite.

~~~
repeat (2)
	repeat (3)
		move (10) steps
		wait (1) secs
	end
end
~~~
{: .language-scratch}

How many times will the Sprite move to the right? 
How many times does the *outer loop* repeat and how many times does the *inner loop* repeat?

#### Loops: Exercise 3 Answer

The Cat will move to the right 6 times in total. 
The *outer loop* repeats 2 times.
The *inner loop* repeats 3 times.

## Data

### Exercise 1

Have a read of the code blocks below:

~~~
when gf clicked
	set [a v] to [5]
	set [b v] to [10]
	set [x v] to [Hello World!]
	set [y v] to <(a) > (b)>
	set [c v] to ((a) + (b))
~~~
{: .language-scratch}

There are five *variables* in the code blocks above.
What are they named, what type (*Boolean*, *Number* or *String*) are they and what will their values be after the last block?

Hint: you can find out more about the different types of variables on the [Scratch Wiki: Variables Tutorial](https://en.scratch-wiki.info/wiki/Variables_Tutorial){:target="_blank"} webpage.

#### Data: Exercise 1 Answer

The variables will be *a*, *b*, *c*, *x* and *y*

- *a* will be a *Number* value: *5*
- *b* will be a *Number* value: *10*
- *c* will be a *Number* value: *15*
- *x* will be a *String* value: *Hello World!*
- *y* will be a *Boolean* value: *false*

### Exercise 2

Read the blocks below, which involve a *variable* (*times*) that is used in a *repeat* block.

~~~
when gf clicked
	set [times v] to [0]
	change [times v] by [2]
	change [times v] by [-1]
	change [times v] by [4]
	change [times v] by [-2]
	repeat (times)
		play drum (1 v) for (1) beats 
	end
~~~
{: .language-scratch}

What is the value of the *times variable* after the last block in the stack above?
How many times does the drum noise play?

#### Data: Exercise 2 Answer

### Exercise 3

A student has created a short *program* as part of a bigger game project. 
They currently have the following blocks:

~~~
when gf clicked
	set [times space bar pressed v] to [5]
	
when [space v] key pressed
	change [times space bar pressed v] by (1)
~~~
{: .language-scratch}

The student wants to change the blocks so that every time they press the space bar, the value of the *time space bar pressed* variable decreases by 1.
How could they change the blocks above to do that?

#### Data: Exercise 3 Answer

The 1 in the *change times space bar pressed* block should be a -1, instead of 1.
With a -1 in the *change times space bar pressed* block, the *change times space bar pressed* variable will decrease by 1 everytime you press the space bar.

The blocks would then be changed to look like this:

~~~
when gf clicked
	set [times space bar pressed v] to [5]
	
when [space v] key pressed
	change [times space bar pressed v] by (-1)
~~~
{: .language-scratch}

## User Input

### Exercise 1

A student has written the following stack of blocks:

~~~
when gf clicked
	ask [Hello, what's your name?] and wait
	say (join [Hello ] (answer)) for (2) secs
~~~
{: .language-scratch}

What will happen when you type *John* in the answer box and press enter?

#### User Input: Exercise 1 Answer

The Cat will say: *Hello John*.
The *join* block joins the two bits of text together into one *String* value.

### Exercise 2

A student is creating a game where the user has to navigate a Cat through a maze.
They are currently working on the *user input* part of the game, shown in the blocks below, and are finding that when they try and move the Cat with the arrow keys, the Cat is not moving as the student expects.

~~~
when [up arrow v] key pressed
	change x by (10)

when [down arrow v] key pressed
	change x by (-10)

when [left arrow v] key pressed
	change y by (-10)

when [right arrow v] key pressed
	change y by (10)
~~~
{: .language-scratch}

What will they need to change to get the Cat to move as expected? 
Hint: when the user presses the right arrow key, will the Cat move to right? Why or why not?

#### User Input: Exercise 2 Answer

The student has confused the *x* and *y* axes and so all of the *change x* and *change y* blocks need to be swapped around.

The correct blocks are shown in the below image:

~~~
when [up arrow v] key pressed
	change y by (10)

when [down arrow v] key pressed
	change y by (-10)

when [left arrow v] key pressed
	change x by (-10)

when [right arrow v] key pressed
	change x by (10)
~~~
{: .language-scratch}

## Conditionals

### Exercise 1

Look at the stack of blocks below that, when clicked, asks the user to enter a secret password, in order to get access to some secret documents. 

~~~
when gf clicked
	ask [What's the secret password?] and wait
	if <(answer) = (1234)> then
		say [Access to Secret Documents: Granted] for (2) secs
	else
		say [Access Denied!] for (2) secs
	end
~~~
{: .language-scratch}

What will happen when the user answers the question (*What's the secret password?*) with: *12345*?

#### Conditionals: Exercise 1 Answer

The message: *Access Denied!* will appear for 2 seconds. 
This is because the answer will be *12345*, which does not equal *1234* and consequently the instructions contained in the else block will be followed. 
If the user had answered with: *1234*, then the message: *Access to Secret Documents: Granted* would have appeared.

### Exercise 2

A student creates a game and decides that only people aged 5 to 95 are allowed to play it.
They create the following stack of blocks. 

~~~
when gf clicked
	ask [What's your age?] and wait
	if <(answer) < (5) > then
		say [You're too young to play this game!] for (2) secs
	else
 		if <(answer) > (95) > then
			say [You're too old to play this game!] for (2) secs
		else
			say [You're the right age to play this game!] for (2) secs
		end
	end
	say [Let's start the game!] for (2) secs
~~~
{: .language-scratch}

What will happen if the game player answers the question (*What's your age?*) with 10? What will happen if the player is aged 4? Or 96?

The student also notices that, regardless of what age the player is, the message: *Let's start the game!* appears.
The student only wants this message to appear if the player is the right age (aged between 5 and 95) to play the game.
To get the blocks to work this way, they will have to move the last *say* block. 
Where should the *say* block be moved?

#### Conditionals: Exercise 2 Answer

- If the age of the player is 10, the *You're the right age to play this game!* message will appear.
- If the age of the player is 4, the *You're too young play this game!* message will appear.
- If the age of the player is 96, the *You're too old to play this game!* message will appear.

To have the message: *Let's start the game!* appear only when the player is the right age, the last say block will have to be placed after the say block that is third from the top, inside the second else block.


