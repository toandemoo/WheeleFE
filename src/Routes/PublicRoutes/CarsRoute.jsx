export const SearchCar = async () => {
  try {
    const response = await fetch('http://localhost:5153/api/car/all?page=1&pageSize=10', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('ListCar error:', error);
      return false;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch ListCar failed:', error);
    return false;
  }
};

export const DetailBike = async (id) => {
  try {
    const response = await fetch(`http://localhost:5153/api/car/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('DetailBike error:', error);
      return false;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch DetailBike failed:', error);
    return false;
  }
}

export const BrandsBike = async () => {
  try {
    const response = await fetch("http://localhost:5153/api/brand/all?page=1&pageSize=100", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Brands Bike error:', error);
      return false;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch Brands Bike failed:', error);
    return false;
  }
}

export const CarTypesBike = async () => {
  try {
    const response = await fetch("http://localhost:5153/api/cartype/all?page=1&pageSize=100", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Car Type Bike error:', error);
      return false;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch Car Type Bike failed:', error);
    return false;
  }
}

export const FilterCar = async (filter) => {
  try {
    var query = new URLSearchParams({
      Keyword: filter.keyword || "",
      Brand: filter.brand || "",
      CarType: filter.model || "",
      PriceMin: filter.priceMin || "",
      PriceMax: filter.priceMax || "",
      SortBy: filter.sortby || "",
      Page: filter.page || 1,
      PageSize: filter.perPage || 12,
    });


    const response = await fetch(`http://localhost:5153/api/car/filter?${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Filter Car Bike error:', error);
      return false;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch Filter Car Bike failed:', error);
    return false;
  }
}

