import useFetch from "./useFetch";


export default function useFilterByCategory(category) {
    const { data, loading, error } = useFetch('data.json');
    const filtered = data ? data.filter(item => item.category === category) : [];
    return {data: filtered, loading, error};
};

