


const make_test_data = (options) => {
    const cards = [
        {title: "John Foo Rammading", subtitle: "President", ...options},
        {title: "George Furlong", subtitle: "Janitor", ...options},
        {title: "Jennifer Gorp", subtitle: "Finance", ...options},
        {title: "Jimmy Bowjangles", subtitle: "Creative Director", ...options},
        {title: "Bob Bar", subtitle: "Vice President & CEO", ...options},
        {title: "Dick Schummaker", subtitle: "CTO", ...options},
        {title: "Deedee Pollack", subtitle: "Dir. Marketing", ...options}
    ]
    const cards1 = cards.slice(0, 3)
    const cards2 = cards.slice(3, 5)
    const cards3 = cards.slice(5, 7)
    const cards4 = cards.slice(3, 7)
    const cards5 = cards.slice(1, 4)
    const cards6 = cards.slice(4, 5)
    const cards7 = cards.slice(3, 4)

    const article_text = `
    <article>
    <h2> Blah-type stuff</h2>
    <p>At noon they sat down by the roadside, near a little brook, and Dorothy opened her basket and got out some bread.  She offered a piece to the Scarecrow, but he refused.</p>
    <p>&ldquo;I am never hungry,&rdquo; he said, &ldquo;and it is a lucky thing I am not, for my mouth is only painted, and if I should cut a hole in it so I could eat, the straw I am stuffed with would come out, and that would spoil the shape of my head.&rdquo;</p>
    <h4>Eating bread</h4>
    <p>Dorothy saw at once that this was true, so she only nodded and went on eating her bread.</p>
    <p>&ldquo;Tell me something about yourself and the country you came from,&rdquo; said the Scarecrow, when she had finished her dinner.  So she told him all about Kansas, and how gray everything was there, and how the cyclone had carried her to this queer Land of Oz.</p>
    </article>
    `

    return {
        article_text: article_text,
        cards: cards,
        cards1: cards1,
        cards2: cards2,
        cards3: cards3,
        cards4: cards4,
        cards5: cards5,
        cards6: cards6,
        cards7: cards7,
        tabs: [
            {
                title: "West",
                description: "West Coast Division",
                content: cards1
            },
            {
                title: "East",
                description: "East Coast Division",
                content: cards2
            },
            {
                title: "North",
                description: "Canada",
                content: cards3
            },
            {
                title: "South",
                description: "Mexico",
                content: cards4
            },
            {
                title: "European",
                description: "French speaking countries",
                content: cards5
            },
            {
                title: "Germany",
                description: "Including Austria",
                content: cards6
            },
            {
                title: "African",
                description: "North Africa and Jerusalem",
                content: cards7
            }
        ]
    }
}

export default make_test_data