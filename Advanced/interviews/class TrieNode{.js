class TrieNode{
	constructor(){
        this.count = 0
        this.isEnd = false
        this.children = new Array(26)
        for(let i=0;i<26;i++){
            this.children[i] = null
        }
    }
}

var root;
let p= { 
 //param A : array of strings
 //return a array of strings
	prefix : function(A){
        root = new TrieNode();
        let B = [];
        console.log('root is ',root )
        for(let i=0;i<A.length;i++){
            insert(root,A[i])
        }
        for(let i=0;i<A.length;i++){
            let str = findPrefix(root,A[i])
            B.push(str)
        }
        return B
	}
};

function insert(root,word){
    let current = root
    for(let i=0;i<word.length;i++){
        let index = word.charCodeAt(i) - 'a'.charCodeAt(0)
        if(current.children[index]==null)
            current.children[index] = new TrieNode()
        current = current.children[index]
        current.count++
    }
    current.isEnd = true
    return
}

function findPrefix(root,word){
    let current = root,
        str = ''
    for(let i=0;i<word.length;i++){
        let index = word.charCodeAt(i) - 'a'.charCodeAt(0)
        if(current.children[index].count>1)
            str = str+word[i]
        else{
            str = str+word[i]
            return str
        }
    }
}