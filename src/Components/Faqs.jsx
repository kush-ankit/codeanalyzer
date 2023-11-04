function Faqs() {

    const faqs = [
        {
            id: 1,
            question: 'What is a code analyzer extension?',
            answer: 'A code analyzer extension is a plugin or tool that extends the functionality of your integrated development environment (IDE) to provide code analysis, feedback, and suggestions for improving your code.'
        },
        {
            id: 2,
            question: 'Why should I use a code analyzer extension?',
            answer: 'Code analyzer extensions help you catch code issues and improve code quality in real-time while you write and edit code, which can lead to faster development and fewer bugs.'
        },
        {
            id: 3,
            question: 'Which IDEs support code analyzer extensions?',
            answer: 'Many popular IDEs support code analyzer extensions, including Visual Studio Code, IntelliJ IDEA, Eclipse, and others'
        },
        {
            id: 4,
            question: 'What types of issues can a code analyzer extension detect?',
            answer: 'Code analyzer extensions can detect a wide range of issues, including syntax errors, code style violations, potential bugs, security vulnerabilities, and performance bottlenecks.'
        }
    ]



    return (
        <div className="p-4">
            <h1 className="text-5xl pb-6 font-bold underline underline-offset-4">Frequently Asked Questions</h1>
            {
                faqs.map(faq => (
                    <div className="p-4 backdrop-brightness-125" key={faq.id}>
                        <details>
                            <summary className="cursor-pointer">{faq.question}</summary>
                            <p className="px-4">{faq.answer}</p>
                        </details>
                    </div>
                ))
            }
        </div>
    )
}

export default Faqs
