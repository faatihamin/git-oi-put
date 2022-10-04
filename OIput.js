const input_text = document.querySelector(`is_nameWork,is_sectionWork,is_description`)
function is_save() {
	resultWork.innerHTML =`
	${is_nameWork.value}<br>`
	resultSection.innerHTML =`
	${is_sectionWork.value}<br>`
	isDesc.innerHTML = `
	${is_description.value}<br>`
}