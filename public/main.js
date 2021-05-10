function main() {

    // const inputOne = document.querySelector('.team-one input')
    // const teamOneHeading = document.querySelector('.team-one h2')
    // inputOne.addEventListener('input', () => 
    // {
    //     teamOneHeading.textContent = inputOne.value
    //         })
    
    //  const inputTwo = document.querySelector('.team-two input')
    // const teamTwoHeading = document.querySelector('.team-two h2')
    // inputTwo.addEventListener('input', () => 
    // {
    //     teamTwoHeading.textContent = inputTwo.value
    //         })

    const sections = document.querySelectorAll('main section')
    sections.forEach((section) => {
        let score = 0

        const input = section.querySelector('input')
        const teamHeading = section.querySelector('h2')
        const scoreHeading = section.querySelector('h3')
        const plusButton = section.querySelector('.add')
        const subtractButton = section.querySelector('.subtract')
        const resetButton = document.querySelector('.reset button')

        input.addEventListener('input', () => {
            teamHeading.textContent = input.value
        })

        plusButton.addEventListener('click', () => {
         if (score < 21) {
            scoreHeading.textContent = ++score
            }
             else {
        window.alert('score cannot be greater than 21')
    }

    if (score === 21) {
        window.alert(`Congratulations!, ${teamHeading.textContent} won!`)
    }
        })

        subtractButton.addEventListener('click', () => {
            if (score > 0) {
            scoreHeading.textContent = --score
            }
             else {
        window.alert('score cannot be lower than 0')
    }
        })
    
    resetButton.addEventListener('click', () => {
    console.log('reset')
     scoreHeading.textContent = '0'
     score = 0   
    })
    
    })
}

document.addEventListener('DOMContentLoaded', main)
