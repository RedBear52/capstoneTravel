
function packingList(country) {
    const packListContainer = document.getElementById('section-container_pack-list')
    const newButton = document.createElement('button')
    packListContainer.appendChild(newButton)
    newButton.setAttribute('id', 'pack-list-btn')
    newButton.innerText = `+ create a packing list for ${country} trip`

    newButton.addEventListener('click', () => {
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
    })

    const form = document.getElementById('pack-list-form')
    form.style.display = 'block'
    const input = document.getElementById('input')
    const userUL = document.getElementById('pack-list')
    const userListItems = JSON.parse(localStorage.getItem('listItems'))

    if (userListItems) {
        userListItems.forEach(listItem => {
            console.log(listItem)
            addPackListItem(listItem)
        })
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        addPackListItem()
        // remove 'input' parameter?
    })



    function addPackListItem(listItem) {
        console.log(listItem)
        let listItemText = input.value
        console.log(listItemText)
        // console.log(listItemText)
        if (listItem) {
            listItemText = listItem.text
            const listEle = document.createElement('li')
            listEle.setAttribute('id', 'pack-list-item')

            if (listItem && listItem.checkedOff == true) {
                listEle.classList.add('checked-off')
            }

            listEle.innerText = listItemText
            userUL.appendChild(listEle)
            input.value = ''

            listEle.addEventListener('dblclick', () => {
                listEle.remove()
                updateLocalStorage()
            })

            listEle.addEventListener('contextmenu', (e) => {
                e.preventDefault()
                listEle.classList.toggle('checked-off')
                updateLocalStorage()
            })
        }
    }

}
        
    function updateLocalStorage() {
    let listItemsEle = document.querySelectorAll('#pack-list-item')

    const listItems = []

    Array.from(listItemsEle).forEach(item => {
        console.log(item)
        listItems.push({
            text: item.innerText,
            checkedOff: item.classList.contains('checked-off')
        })
    })

    console.log(listItems)
    localStorage.setItem('listItems', JSON.stringify(listItems))
}  

    // updateLocalStorage()

export { packingList }