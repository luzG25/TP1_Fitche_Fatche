
<body>

<h1>Fitche Fatche - Game in ReactJS</h1>

<p>This project is an implementation of the "Fitche Fatche" game developed using <strong>ReactJS</strong> and <strong>TailwindCSS</strong>. The game is a digital version of the classic tic-tac-toe, where two players compete on a 3x3 grid.</p>

<h2>🎯 Objective</h2>
<p>The goal is to be the first to complete a sequence of three marks (X or O) in a horizontal, vertical, or diagonal line. If the board is filled without a winner, the game ends in a draw.</p>

<h2>🚀 Technologies Used</h2>
<ul>
    <li><strong>ReactJS</strong>: JavaScript framework for building user interfaces.</li>
    <li><strong>TailwindCSS</strong>: Utility-first CSS framework for rapid styling.</li>
    <li><strong>Vite</strong>: Tool for quickly setting up a React project.</li>
    <li><strong>Visual Studio Code</strong>: IDE used for development.</li>
</ul>

<h2>📦 Project Structure</h2>
<ul>
    <li><strong>Main Components</strong>:
        <ul>
            <li><code>PlayersBoard</code>: Displays players' names and their symbols (X or O).</li>
            <li><code>Board</code>: Main component containing the cells for marking.</li>
            <li><code>Cube</code>: Represents each cell on the board.</li>
            <li><code>Winner</code> and <code>FullBoard</code>: Components to indicate a winner or a draw, with an option to reset the game.</li>
        </ul>
    </li>
</ul>

<h2>🛠️ Features Implemented</h2>
<ul>
    <li>Turn-based system to alternate between players.</li>
    <li>Logic to check for a winner (sequences in horizontal, vertical, or diagonal lines).</li>
    <li>Detection of a draw if the board is full.</li>
    <li>Reset function to restart the game.</li>
    <li>Responsive styling with TailwindCSS.</li>
</ul>

<h2>🗂️ How to Run the Project</h2>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/your-username/fitche-fatche-react.git</code></pre>
    </li>
    <li>Navigate to the project directory:
        <pre><code>cd fitche-fatche-react</code></pre>
    </li>
    <li>Install the dependencies:
        <pre><code>npm install</code></pre>
    </li>
    <li>Run the project:
        <pre><code>npm run dev</code></pre>
    </li>
    <li>Open your browser at <a href="http://localhost:5173">http://localhost:5173</a> to view the game.</li>
</ol>

<h2>📚 Final Considerations</h2>
<p>This project provided an opportunity to apply fundamental ReactJS concepts such as:</p>
<ul>
    <li>State management.</li>
    <li>Conditional rendering.</li>
    <li>Use of props.</li>
    <li>Efficient styling with TailwindCSS.</li>
</ul>

<h3>📝 Future Improvements</h3>
<ul>
    <li>Add functionality to customize player names and their symbols.</li>
    <li>Enhance mobile responsiveness.</li>
</ul>

</body>
</html>
