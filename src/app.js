export default function App() {
  return `
    <main style="font-family: sans-serif; max-width: 600px; margin: 2rem auto;">
      <h1>HVAC Service Report</h1>
      <form>
        <label>Customer Name:<br><input type="text" name="customer" /></label><br><br>
        <label>Technician:<br><input type="text" name="technician" /></label><br><br>
        <label>Date:<br><input type="date" name="date" /></label><br><br>
        <label>Service Notes:<br><textarea name="notes"></textarea></label><br><br>
        <button type="submit">Submit</button>
      </form>
    </main>
  `;
}
