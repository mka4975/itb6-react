export default function(): void {
  const container: Element = document.getElementById("tab-view");
  container.innerHTML = `
    <form id="add-new-message-form">
        <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" class="form-control" id="subject" name="subject">
        </div>
        <div class="form-group">
            <label for="text">Body</label>
            <input type="text" class="form-control" id="text" name="text">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
}
