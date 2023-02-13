
# Rules
- write algorithms leetcode style. aka they are functions which will have an input passed to them.

# Djikstra's Algorithm
https://www.youtube.com/watch?v=VnTlW572Sc4

- uses an undirected weighted graph
- aim is to find the shortest path from the source node to each node where a path is defined as a sequence of nodes
- this works when the weights of the edges are not negative
- the idea is to find the shortest path from source node to any node, it is enough to consider only adjacent nodes of that node
- how algo works
    - s is source node
    - w (u,v) is distance between nodes u and v, w >= 0
    - d(v) is path length from s to v
    - the nodes are divided into 2 sets: 
        - permanent, which correspond to shortest path length
        - temporary, correspond to upper bounds on the shortest path lengths
- steps
    1. mark all nodes as temporary
    - set d(v) to infinity for each node EXCEPT the source node
    - for the source node, the path length is 0
    2. choose a temporary node u with the shortest path length
    - mark u as permanent
    - update path length for every temporary adjacent node to u (recursive)
    3. we stop if there is no temp node left, otherwise go back to step 2


