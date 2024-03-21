import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosRequest } from "../utils/axiosRequest";
import { getToken } from "../utils/token";

let id = getToken().sid;
export const getProductUserId = createAsyncThunk(
  "project/getProductById",
  async () => {
    try {
      let { data } = await axiosRequest.get(
        `Product/get-products?UserId=${id}`
      );
      return data.data.products;
    } catch (error) {
      console.error(error);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "project/deleteProduct",
  async (id, { dispatch }) => {
    console.log(id);
    try {
      const { data } = await axiosRequest.delete(
        `Product/delete-product?id=${id}`
      );
      dispatch(getProductUserId());
    } catch (error) {
      console.log(error);
    }
  }
);

export const postCategory = createAsyncThunk(
  "project/postCategory",
  async (Newobj, { dispatch }) => {
    try {
      const form = new FormData();
      form.append("CategoryImage", Newobj.Images);
      form.append("CategoryName", Newobj.ProductName);
      let { data } = await axiosRequest.post("Category/add-category", form, {
        "Content-Type": "multipart/form-data",
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteCategories = createAsyncThunk(
  "project/deleteCategories",
  async (id, { dispatch }) => {
    try {
      let { data } = await axiosRequest.delete(
        `Category/delete-category?id=${id}`
      );
      dispatch(getCategories(data));
    } catch (error) {
      console.error(error);
    }
  }
);

export const getUser = createAsyncThunk("project/getUser", async () => {
  try {
    let { data } = await axiosRequest.get("UserProfile/get-user-profiles");
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const getUserById = createAsyncThunk(
  "project/getUserById",
  async (_, { dispatch }) => {
    try {
      let { data } = await axiosRequest.get(
        `UserProfile/get-user-profile-by-id?id=${id}`
      );
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getCategories = createAsyncThunk(
  "project/getCategories",
  async () => {
    try {
      let { data } = await axiosRequest.get("Category/get-categories");
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getColor = createAsyncThunk("project/getColor", async () => {
  try {
    let { data } = await axiosRequest.get("Color/get-colors");
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const getBrands = createAsyncThunk("project/getBrands", async () => {
  try {
    let { data } = await axiosRequest.get("Brand/get-brands");
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const getSubCategories = createAsyncThunk(
  "project/getSubCategories",
  async () => {
    try {
      let { data } = await axiosRequest.get("SubCategory/get-sub-category");
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const postProduct = createAsyncThunk(
  "project/postProduct",
  async (newObj, { dispatch }) => {
    try {
      const form = new FormData();
      form.append("Images", newObj.Images);
      form.append("BrandId", newObj.BrandId);
      form.append("ColorId", newObj.ColorId);
      form.append("ProductName", newObj.ProductName);
      form.append("Description", newObj.Description);
      form.append("Quantity", newObj.Quantity);
      form.append("Code", newObj.Code);
      form.append("Price", newObj.Price);
      form.append("HasDiscount", newObj.HasDiscount);
      form.append("DiscountPrice", newObj.DiscountPrice);
      form.append("SubCategoryId", newObj.SubCategoryId);
      let { data } = await axiosRequest.post("Product/add-product", form, {
        "Content-Type": "multipart/form-data",
      });
      console.log(data);
      dispatch(getProductUserId());
    } catch (error) {
      console.log(error);
    }
  }
);

export const putCategories = createAsyncThunk(
  "project/putCategories",
  async (objNew, { dispatch }) => {
    try {
      console.log(objNew);
      const form = new FormData();
      form.append("Id", objNew.Id);
      form.append("CategoryImage", objNew.CategoryImage);
      form.append("CategoryName", objNew.CategoryName);

      let { data } = await axiosRequest.put("Category/update-category", form, {
        "Content-Type": "multipart/form-data",
      });
      dispatch(getCategories(data));
    } catch (error) {
      console.error(error);
    }
  }
);

export const postBrand = createAsyncThunk(
  "project/postBrand",
  async (obj, { dispatch }) => {
    try {
      console.log(obj);
      let { data } = await axiosRequest.post(
        `Brand/add-brand?BrandName=${obj.BrandName}`
      );
      dispatch(getBrands(data));
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteBrands = createAsyncThunk(
  "project/deleteBrands",
  async (id, { dispatch }) => {
    try {
      let { data } = await axiosRequest.delete(`Brand/delete-brand?id=${id}`);
      dispatch(getBrands(data));
    } catch (error) {
      console.error(error);
    }
  }
);

export const putBrands = createAsyncThunk(
  "project/putBrands",
  async (obj, { dispatch }) => {
    try {
      console.log(obj);
      let { data } = await axiosRequest.put(
        `Brand/update-brand?Id=${obj.Id}&BrandName=${obj.BrandName}`
      );
      dispatch(getCategories(data));
    } catch (error) {
      console.error(error);
    }
  }
);

export const putProfile = createAsyncThunk(
  "todos/putProfile",
  async (obj, { dispatch }) => {
    try {
      console.log(obj);
      const form = new FormData();
      form.append("Image", obj.Images);
      form.append("FirstName", obj.FirstName);
      form.append("LastName", obj.LastName);
      form.append("Email", obj.Email);
      form.append("PhoneNumber", obj.PhoneNumber);
      form.append("Dob", obj.Dob);

      let { data } = await axiosRequest.put(
        "UserProfile/update-user-profile",
        form,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      dispatch(getCategories(data));
    } catch (error) {
      console.error(error);
    }
  }
);

export const counterSlice = createSlice({
  name: "project",
  initialState: {
    data: [],
    dataProfile: [],
    dataCategories: [],
    dataColor: [],
    dataBrands: [],
    dataSubCategories: [],
    dataUser: [],
    dataUserById: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductUserId.fulfilled, (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.dataUser = action.payload;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.dataUserById = action.payload;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.dataCategories = action.payload;
    });
    builder.addCase(getColor.fulfilled, (state, action) => {
      state.dataColor = action.payload;
    });
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.dataBrands = action.payload;
    });
    builder.addCase(getSubCategories.fulfilled, (state, action) => {
      state.dataSubCategories = action.payload;
    });
  },
});

export default counterSlice.reducer;
