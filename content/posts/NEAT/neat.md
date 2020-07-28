---
title: Neural Network masters Flappy Bird
cover: ./head.jpg
date: 2020-05-16
tags: [post,article,Python, Neural Network, NEAT Algorithm, Flappy Bird]
---

NEAT(NeuroEvolution of Augmenting Topologies) is an genentic algorithm that creates artificial neural network. It works on the basis of natural selection. As Darwin says,"Survival of the fittest". NEAT has shown greater promise in reinforcement learning tasks.


<h2>Bascially, there are four steps in this algorithm:</h2>

1. Initial population
   Create a population of birds(say 100).

2. Fitness function
   This function gives point to birds if they pass certain thershold.

3. Collection of best
   Selection of best performers.

4. And mutate
   Mutate them to make them even better.

<h2>Pseudo Code</h2>

![](/pseudo.png)


<h2>Training Neural Network</h2>

![](/layer_pic.jpg)

The NEAT approach begins with a perceptron-like feed-forward network of only input neurons and output neurons. As evolution progresses through discrete steps, the complexity of the network's topology may grow, either by inserting a new neuron into a connection path, or by creating a new connection between neurons. Hence, it finds optimal path.

[Code:GitHub](https://github.com/rgrupesh/Flappy-Bird-NN)

<h2>Reference</h2>

- [NEAT-Python Overview](https://neat-python.readthedocs.io/en/latest/neat_overview.html)
- [Stanley Paper](http://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf)
