import { RichText } from "prismic-reactjs";

export const extractSliceData = (data, sliceType) => {
  return data.body
    .filter((slice) => slice.slice_type === sliceType)
    .reduce((all, slice) => [...all, ...slice.items], []);
};

export const encodeString = (stringValue) => {
  return encodeURI(stringValue);
};

export const encodeBlog = (blog) => {
  return encodeString(RichText.asText(blog).toLowerCase().replace(/\s/g, "-"));
};

export const encodeVideo = (video) => {
  return encodeString(RichText.asText(video).toLowerCase().replace(/\s/g, "-"));
};
