const Accordion = (props) => {
	return (
<div class="accordion">
  <div class="accordion-header">
    <h3>{props.title}</h3>
    <button class="accordion-toggle">+</button>
  </div>
  <div class="accordion-content">
    <p>{props.content}</p>
  </div>
</div>
)}
export default Accordion;