
const packingList = (country) => {
    const packListContainer = document.getElementById('section-container_pack-list')
    const newButton = document.createElement('button')
    packListContainer.appendChild(newButton)
    newButton.innerText = `+ create a packing list for ${country} trip`

    newButton.addEventListener('click', () => {
        const container = document.getElementById('pack-list-container')
        const myModal = document.getElementById('my-modal')
        myModal.style.display = 'block'
        
        const close = document.getElementsByClassName('close')[0]
        close.addEventListener('click', () => {
            myModal.style.display = 'none'
        })
        window.addEventListener('click', (e) => {
            if (e.target == myModal)
            myModal.style.display = 'none'
        })

        const form = document.getElementById('pack-list-form')
        form.classList.toggle('hidden')
        const input = document.getElementById('input')
        const packList = document.getElementById('pack-list-form')
        packList.style.display = 'block'
        const userListItems = JSON.parse(localStorage.getItem('pack-list'))

        if(userListItems) {
            userListItems.forEach(listItem => addPackListItem(listItem))
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault()

            addPackListItem(input)
        })

        const addPackListItem = (listItem) => {
            let listItemText = listItem.value
            if(listItem) {
                const listEle = document.createElement('li')

                if(listItem && listItem.completed) {
                    listEle.classList.add('checked-off')
                }

                listEle.innerText = listItemText
                packList.appendChild(listEle)
                input.value = ''

                listEle.addEventListener('dblclick', () => {
                    listEle.classList.toggle('checked-off')
                })

                listEle.addEventListener('contextmenu', (e) => {
                    e.preventDefault()
                    listEle.remove()
                })
            }
        }
    // const updateLocalStorage = () => {
    })
}

export { packingList }