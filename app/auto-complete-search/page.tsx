import AutoCompleteSearchBar from "@/src/container/AutoCompleteSearchBar/AutoCompleteSearchBar";

const AutoCompleteSearchBarPage = async () => {
//   try {
//     const response = await fetch(
//       "https://dummyjson.com/products/search?q=phone"
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }

  return (
    <div>
      <AutoCompleteSearchBar />
    </div>
  );
};

export default AutoCompleteSearchBarPage;
