import Heading from "../ui/Heading";

function Cabins() {
  return (
    <div className="px-5 py-6">
      <div className="flex items-center justify-between">
        <Heading type="h1">Cabins</Heading>
        <p>Filter / Sort</p>
      </div>

      <div className="py-4 border-collapse border border-slate-500">
        <table class="table-auto">
          <thead>
            <tr>
              <th>Image</th>
              <th>Cabin</th>
              <th>Capacity</th>
              <th>Price</th>
              <th>Discount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Image goes here</td>
              <td>Cabin Name</td>
              <td>5</td>
              <td>200</td>
              <td>25</td>
              <td> Delete Icon</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cabins;
