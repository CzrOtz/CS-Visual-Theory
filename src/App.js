import './App.css';
import React, { useState } from 'react';


function Description()
{
  return (
    <div id="description" classname="secondaryContainer" >
      <h1>Computer Science Visual Theory</h1>
      <p><span className="attention2">Purpose of this site: </span> To teach and illustrate theoretical Computer Science concepts in a visual and interactive way.</p>
      <p>&bull; To contribute to the field of Computer Science by assisting students in their technical development</p>
      <p>&bull; Concepts taught in the C++ programming language due to its universal adoption in academia</p>
      <p>
        <span className="attention1">Constraints:</span> The simulations on this site are compatible with mouse and keyboard PC setups only. We apologize for any inconvenience.
      </p>

      
    </div>
  )
}

function Project1() {
  return (
    <div id="Project1Container">
      <h2>
        <span style={{ marginRight: '10px' }}>Project 1:</span>
        <span>Build and Traverse A Linked List</span>
      </h2>
      <p>This program will illustrate how a computer goes about assembling a linked list in running memory.</p>
      <p><span className='attention2'>Purpose of this simulation: </span> To demonstrate how pointers are used in dynamic memory allocation in the context of a linked list</p>
      <p>
        <span className="attention1">Important:</span> before you start, please go over these instructions.
        <br />
        &bull; Controls: {" "}
        <span className="attention3">W</span>{' '}
        <span className="attention3">A</span>{' '}
        <span className="attention3">S</span>{' '}
        <span className="attention3">D</span>{' '}
        <span className="attention3">Q</span>{' '}
        <span className="attention3">E</span>. 

        W: Forward, A: Left, S: Back, D: Right, Q: Up, E: Down.
        <br />
        &bull; {' '}
        <span className='attention3'> P </span> pauses the simulation and allows you to choose settings. The settings panel won't open until the iteration is complete. 
        <br />
        <br />
        &bull; {' '}
        <span className='attention3'> ESC </span> Makes your cursor visible.
        <br />
        <br />
        &bull; "Click" on the simulation to focus your cursor
        <br />
        <br />
        &bull; "Reset" resets the list
        <br />
        <br />
        &bull; "Follow current" locks the camera to the variable called current
        <br />
        <br />
        &bull; "Fast Mode" makes the iteration faster.
        <br />
        <br />
        &bull; To interact with the simulation, you must focus the cursor, simply click on the simulation and you will be focused. If you do not focus it, you will experience problems
        <br />
        <br />
        &bull; If the settings panel is open and you leave the simulation, you will need to click on the simulation and refocus the cursor by pressing <span className='attention3'> P </span>. Once you do this, you will be able to see the cursor and navigate back to the simulation.
      </p>
      <p>Under the program, there is extensive information about how this program correlates to a real linked list.</p>
      <h3>Simulation Prototype 1</h3>
      <iframe
        src="/linkedListBuild7/index.html"
        style={{ width: "1000px", height: "700px", border: "none", backgroundColor: "#222831"}}
        title="Linked List Simulation"
      ></iframe>
      <h2>Technical Details: Linked List</h2>
      {/* <div>
        <Project1TechDetails />
        <Project1TechDetails2 />
      </div> */}

      <FoldInfo1 />
    </div>
  );
}

function Project1TechDetails() {
  return (
    <div id="Project1TechDetails">
      <h4>Simulation Details</h4>
      <p>
        To address the elephant in the room: why does this linked list look different 
        from the linked list I see in illustrations?
      </p>
      <p>
        The reason you see linked lists as left to right connected with a line is to 
        simplify the relationship of an abstract data structure. What I did here was 
        remove that simplified illustration and replaced it with a more accurate 
        representation of what's really going on. Nodes are created at runtime and 
        placed somewhere where there is space. It’s as simple as that; however, as 
        you can imagine, this would not fit well in a textbook.
      </p>

      <h4>Explaining the map</h4>
      <p>
        Do not think of this as a map in a game, think of it as running memory. 
        However, since we are using a world-space type layout, we do not use memory 
        addresses; we use world-space addresses.
      </p>

      <h4>The Node</h4>
      <p>
        You will see that there is a green coordinate point on top of the node; this 
        is its own location in the world. You will also see a red text that sometimes 
        says “nullptr” and sometimes shows a coordinate point; this is the pointer 
        known as “next” or sometimes “link.” Here, we refer to it as next. Last, you 
        will see that all nodes have “Val” inside. This is because this simulation 
        doesn't focus on data or data insertion; rather we focus on the actual data 
        structure, no need to worry about any data for now.
      </p>

      <h4>“Currents” behavior</h4>
      <p>
        As you saw from the simulation, current continually travels from node to node 
        in a “flying” motion.
      </p>
      <p>
        This is to illustrate the computer doing work because current is not moving 
        or flying anywhere. All current does is copy values for use later, remember this.
      </p>
      <p>
        You may have noticed that current also spawns in a random location. Similar to 
        a node, current does not exist at the time of compilation; it is created only 
        at runtime inside the else block. Due to this, the computer places it wherever 
        there is space.
      </p>
      <p>
        The variable head is always at the same spot because it is not dynamically allocated.
      </p>
    </div>
  );
}

function Project1TechDetails2() {
  return (
    <div id="Project1TechDetails2">
      {/* ALGORITHM DETAILS */}
      <h4>Algorithm Details</h4>
      <p>
        This algorithm is a simple iterator-style algorithm for creating a linked list. It requires the
        computer to traverse the entire linked list to add a node. Note that this is not the most efficient
        way to insert nodes into a linked list. More efficient versions of this algorithm exist, which use a
        pointer to the last node (<code>tail</code>) to speed up insertion by avoiding traversal. However, this
        version is very simple and makes it easier for those learning about pointers and dynamic memory 
        allocation to understand the mechanics of building a linked list.
      </p>

      {/* CODE LISTING */}
      <h4>Code Listing</h4>
      <pre className="code"> 
        <code>
        {`#include <iostream>
using namespace std;


struct Node
{
    int val;        
    Node* next;     

    Node(int value) : val(value), next(nullptr) {}
};

Node* head = nullptr;

void addNode(int val)
{
    
    Node* newNode = new Node(val); 

    if (head == nullptr)
    {         
        
        head = newNode;

    } 
      else 
    {                       
        Node* current = head;     
        
        while (current->next != nullptr)
        {  
            current = current->next;  
        }
        
        current->next = newNode;  
    }
}

int main() {
    
    //example
    addNode(10);   
    addNode(20);   
    addNode(30);

    return 0;
}`}
        </code>
      </pre>

      {/* LINE-BY-LINE EXPLANATION */}
<h4>Line by Line Explanation</h4>
<p>
  <span className="codeDescription">
    <code>void addNode(int val)</code>
  </span> &mdash; Define the function.
</p>
<br />
<p>
  <span className="codeDescription">
    <code>Node* newNode = new Node(val);</code>
  </span> &mdash; Create a new instance of <span className="codeDescription2"><code>Node</code></span> with {" "}
  <span className="codeDescription2"><code> val</code></span> as a parameter. Assign it to a pointer of type <span className="codeDescription2"><code>Node</code></span> called <span className="codeDescription2"><code>newNode</code></span>.
  (This allocates a new node somewhere in memory, unlinked and not related to anything yet.)
</p>
<br />
<p>
  <span className="codeDescription">
    <code>if (head == nullptr)</code>
  </span> &mdash; Check if <span className="codeDescription2"><code>head</code></span> points to <span className="codeDescription2"><code>nullptr</code></span>.
  If it does, enter this conditional.
</p>
<br />
<p>
  <span className="codeDescription">
    <code>head = newNode;</code>
  </span> &mdash; Remember we created a new node and assigned it to <span className="codeDescription2"><code>newNode</code></span>. 
  Now we assign <span className="codeDescription2"><code>head</code></span> the value of <span className="codeDescription2"><code>newNode</code></span>. At this point, the list contains one node, 
  and <span className="codeDescription2"><code>head</code></span> points to it. Then we exit this <span className="codeDescription2"><code>if</code></span> block.
</p>
<br />
<p>
  <span className="codeDescription">
    <code>else</code>
  </span> &mdash; If <span className="codeDescription2"><code>head</code></span> is not <span className="codeDescription2"><code>nullptr</code></span>, we do the following.
</p>
<br />
<p>
  <span className="codeDescription">
    <code>Node* current = head;</code>
  </span> &mdash; Create a pointer of type <span className="codeDescription2"><code>Node</code></span> named 
  <span className="codeDescription2"><code>current</code></span>, and assign it the value of <span className="codeDescription2"><code>head</code></span>. At this point, <span className="codeDescription2"><code>current</code></span> 
  and <span className="codeDescription2"><code>head</code></span> hold the same address.
</p>
<br />
<p>
  <span className="codeDescription">
    <code>while (current-&gt;next != nullptr)</code>
  </span> &mdash; <span className="codeDescription2"><code>-&gt;</code></span> is shorthand for 
  <span className="codeDescription2"><code>(*pointer).member</code></span>. Initially, <span className="codeDescription2"><code>current</code></span> has the value of <span className="codeDescription2"><code>head</code></span>. 
  <span className="codeDescription2"><code>head</code></span> has the address of the first node, which has a member pointer called <span className="codeDescription2"><code>next</code></span>. 
  We’re checking if <span className="codeDescription2"><code>next</code></span> is <span className="codeDescription2"><code>nullptr</code></span>. If there’s only one node, we exit the loop 
  right away (because that node’s <span className="codeDescription2"><code>next</code></span> pointer is <span className="codeDescription2"><code>nullptr</code></span>). If there are more 
  nodes, we enter the loop.
</p>
<br />
<p>
  <span className="codeDescription">
    <code>current = current-&gt;next;</code>
  </span> &mdash; Now <span className="codeDescription2"><code>current</code></span> will be assigned the value of the 
  member pointer called <span className="codeDescription2"><code>next</code></span> in the node that it’s currently at. This is what moves 
  <span className="codeDescription2"><code>current</code></span> down the list.
</p>
<br />
<p>
  <span className="codeDescription">
    <code>current-&gt;next = newNode;</code>
  </span> &mdash; We’re still inside the <span className="codeDescription2"><code>else</code></span> block, so we 
  already know at least one node exists, and <span className="codeDescription2"><code>head</code></span> is set. By this point, <span className="codeDescription2"><code>current</code></span> 
  points to the last node in the list (whose <span className="codeDescription2"><code>next</code></span> was <span className="codeDescription2"><code>nullptr</code></span>). Now we instruct 
  the computer to replace <span className="codeDescription2"><code>nullptr</code></span> with the address of the node created at the start of this 
  function. This effectively links the new node to the end of the list.
</p>
<br />
<p>
  If you have a keen eye, you’ll notice that for a brief moment in time, there are two nodes in 
  world space (simulating RAM) with <span className="codeDescription2"><code>nullptr</code></span> as their <span className="codeDescription2"><code>Node* next</code></span> value. However, 
  one of these nodes is more “linked” than the other because the previous node points to it, while the newest 
  node isn’t linked at all yet. It’s the line <span className="codeDescription2"><code>current-&gt;next = newNode;</code></span> that completes the link.
</p>
    </div>
  );
}


function FoldInfo1() {
  // Local state to show/hide the details
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={handleToggle} style={{ marginTop: '10px' }} className='showInfo1'>
        {isOpen ? 'Hide Info' : 'Show Info'}
      </button>
      {isOpen && (
        <div style={{ marginTop: '20px' }}>
          <Project1TechDetails />
          <Project1TechDetails2 />
        </div>
      )}
    </div>
  );
}




function Project2()
{
  return(
    <div id="project2Container">
      <h3> What's Next?</h3>
      <p>Hopefully, depending on schedule constraints, I will be able to develop a few more simulations</p>
      <p>Planned Next Project: Developing functionality to perform actions on an existing singly linked list.</p>
      
    </div>
  )
}

function Container()
{
  return(
    <div id="MainContainer">
      <Description />
      <Space />
      <Project1 />
      <Space />
      <Project2 />
    </div>
  )
}

function Space() {
  return (
    <div 
      style={{ 
        margin: "30px 0",
        height: "1px",       // Ensures the spacer takes up space
        backgroundColor: "transparent"
      }}
    />
  );
}


function App() {
  return (
    <div className="App">
      
      <Container />
      
    </div>
  );
}


export default App;
