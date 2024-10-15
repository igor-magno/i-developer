document.addEventListener('DOMContentLoaded', () => {

    const printAsPDF = () => {
        window.print()
    }

    document.querySelector('#pdf-download').addEventListener('click', printAsPDF)
})
