
const sortList = document.querySelector(".sortable-list")
const listItems = document.querySelectorAll(".item")



    listItems.forEach(item=>{
        
        item.addEventListener("dragstart",()=>{
            item.classList.add("dragging")
        })
        item.addEventListener("dragend",()=>{
            item.classList.remove("dragging")
        })
    })

    sortList.addEventListener("dragover",(e)=>{
        const draggingItem = document.querySelector(".dragging")

            console.log("clientY:" + e.clientY);

            console.log("offsetHeight: " + draggingItem.offsetHeight);
            console.log("offsetTop :" + draggingItem.offsetTop);

            console.log(`---------------------------`);

        const siblings = [...document.querySelectorAll(".item")]
        const nextSibling = siblings.find(sibling=>{
            return e.clientY <= sibling.offsetTop + (sibling.offsetHeight/2)
        })

        sortList.insertBefore(draggingItem,nextSibling)
            console.log(nextSibling);
    })