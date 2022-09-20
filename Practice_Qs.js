//statuses: looked_at_solution, solved_not_optimally, solved_optimally
Template = 
{
    name: '',
    difficulty: '',
    desc: '',
    date: '',
    status: '',
    minutes_taken: '',
    my_time_complexity: '',
    my_space_complexity: '',
    optimal_time_complexity:'',
    optimal_space_complexity:'',
    comment: ''
}

Questions = [
    {
        name: 'Symmetric Tree',
        difficulty: 'easy',
        desc: 'Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).',
        date: '9/12/22',
        status: 'looked_at_solution',
        comment: 'problem was I expected the solution to be easeier than it was. Also I lost practive with recursion'
    },
    {
        name: 'Maximum Depth of Binary Tree',
        difficulty: 'easy',
        desc: 'Given the root of a binary tree, return its maximum depth.A binary trees maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.',
        date: '9/13/2022',
        status: 'solved_optimally',
        minutes_taken: '5',
        optimal_time_complexity:'O(N)',
        optimal_space_complexity:'O(N)',
        comment: 'did this after fresh from a nap. Brain was in good state.'
    },
    {
        name: 'Binary Tree Inorder Traversal',
        difficulty: 'easy',
        desc: 'Given the root of a binary tree, return the inorder traversal of its nodes values',
        date: '9/14/2022',
        status: 'solved_optimally',
        minutes_taken: '10',
        optimal_time_complexity:'O(N)',
        optimal_space_complexity:'O(N)',
        comment: 'there was an additional challenge to do it iteratively but didnt feel ike it'
    },
    {
        name: 'Pseudo-Palindromic Paths in a Binary Tree',
        difficulty: 'medium',
        desc: 'Given a binary tree where node values are digits from 1 to 9. A path in the binary tree is said to be pseudo-palindromic if at least one permutation of the node values in the path is a palindrome. Return the number of pseudo-palindromic paths going from the root node to leaf nodes.',
        date: '9/14/2022',
        status: 'solved_not_optimally',
        minutes_taken: '60',
        my_time_complexity: ['idk,11%'],
        my_space_complexity: ['idk,7%'],
        optimal_time_complexity:'O(N)',
        optimal_space_complexity:'O(H), H being number of nodes',
        comment: 'basically to actually solve this problem I had to create a copy of a map. I had problems understanding this because i didnt know primitive vs reference variables. as you pass a map through a dfs function, if you dont make a copy all calls reference the original map u passed. not the same case with strings.the real solution to this problem involves bit manipulation! aka bitwise operators'
    },
    {
        name: '',
        difficulty: '',
        desc: '',
        date: '',
        status: '',
        minutes_taken: '',
        my_time_complexity: '',
        my_space_complexity: '',
        optimal_time_complexity:'',
        optimal_space_complexity:'',
        comment: ''
    }
]