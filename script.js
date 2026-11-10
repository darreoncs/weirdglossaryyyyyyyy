
const glossary = [
    {
        term: "Brain Lag",
        definition: "When your brain takes five business days to process a question."
    },
    {
        term: "Couch Potato",
        definition: "A person who becomes one with the couch and refuses to move."
    },
    {
        term: "Delulu",
        definition: "Being so confident about something that reality becomes optional."
    },
    {
        term: "Homework Goblin",
        definition: "The mysterious creature responsible for assignments disappearing."
    },
    {
        term: "Keyboard Warrior",
        definition: "Someone who argues online like they are fighting the final boss."
    },
     {
        term: "Professional Overthinker",
        definition: "Someone who can turn a simple hello into a three-hour investigation."
    },
    {
        term: "Social Battery",
        definition: "The invisible battery that dies after talking to three people."
    },
    {
        term: "WiFi Depression",
        definition: "The emotional damage caused by slow internet."
    }
];

// Sort terms alphabetically
glossary.sort((a, b) =>
    a.term.localeCompare(b.term)
);

const searchInput = document.getElementById("search");
const glossaryDiv = document.getElementById("glossary");
const count = document.getElementById("count");

function displayTerms(terms) {
    glossaryDiv.innerHTML = "";

    count.textContent =
        `Showing ${terms.length} of ${glossary.length} terms`;

    if (terms.length === 0) {
        glossaryDiv.textContent = "No matches";
        return;
    }

    terms.forEach(item => {
        const div = document.createElement("div");
        div.className = "term";

        const title = document.createElement("h3");
        title.textContent = item.term;

        const definition = document.createElement("p");
        definition.textContent = item.definition;

        div.appendChild(title);
        div.appendChild(definition);

        glossaryDiv.appendChild(div);
    });
}

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value
        .trim()
        .toLowerCase();

    const filteredTerms = glossary.filter(item =>
        item.term.toLowerCase().includes(searchText)
    );

    displayTerms(filteredTerms);
});

displayTerms(glossary);
