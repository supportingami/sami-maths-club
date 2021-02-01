# Bridges of Konigsberg

## Introduction

This is a classic mathematics problem. Its resolution in 1736 by Leonhard Euler is considered a foundation of the mathematical field of graph theory.

Without knowing the problem, it is initially quite enjoyable to try any find a solution. However, there is in fact no way to cross every bridge once, as Euler showed (see Solution section). 

You could say that the ‘solution’ to this problem is to wait for the second world war, where two of the bridges were destroyed, making it possible to find a route crossing each remaining bridge once.

## Solution

As mentioned, there is no solution to the problem as it is outlined in the question. To demonstrate this, it is helpful to reduce the situation to a mathematical structure called a *graph* (a different type of graph to what you are probably used to).

<img src="../../images/konigsberg-bridges-2.png" width=100>

We have replaced the sections of land with circles and the bridges with connecting lines. We usually refer to these circles as *vertices*, and the lines as *edges*.

Say we start our walk on the middle vertex and walk to the top one, and then to the vertex on the right. Our path might look like this:

<img src="../../images/konigsberg-bridges-3.png" width=100>

Notice how, since we have walked both to and from the top vertex, we have used two of the edges connected to it. Similarly, once we leave the rightmost vertex, we will use another edge and so will have removed two of its connected edges:

<img src="../../images/konigsberg-bridges-4.png" width=100>

We can see that, as we walk, we always use pairs of edges connected to a particular vertex. The only time that this is not true is for the vertices that we begin and end on.

Because of this, after walking we will always have used an even number of edges connected to a given vertex (unless they are one that we start or end on). So, if we want to remove all the edges, the vertices in the graph must have an even number of edges connected to them. The only two vertices that can have an odd number of edges are the starting and ending ones.

This was Euler's discovery, that to be able to pass through all the edges in a graph exactly once, there can be no more than two vertices which have an odd number of edges connected to them.

In the case of Konigsberg, three of the vertices have 3 edges and one (the central island) has 5. Since all four of the vertices have an odd number of edges, it is impossible to find a path which passes over each edge exactly once.

## Extension

Test this result by creating other graphs and trying to find a route passing over each edge once, so-called *Eulerian paths*. See if you can predict whether a given graph will have a Eulerian path.

Where a Eulerian path is possible, do you notice anything else about the number of vertices which can have an odd number of edges? Try finding a path for a graph which only has one vertex with an odd number of edges, if you cannot, can you see why?

*Hint: we said that only the starting and ending vertices can have an odd number of connected edges, what happens in the two possible cases where these are different vertices and where these are the same vertex?*
