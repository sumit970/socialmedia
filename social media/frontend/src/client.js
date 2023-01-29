import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client =sanityClient({
    projectId:'0ja5d61f',
    dataset:'production',
    apiVersion:'2022-01-09',
    useCdn:true,
    token:'skx2sIhpcVCx1TvWiaHDE49xIKSpUwsMRmG33I3DUoctS7rowyzxruwLEDcki09e62SuVbyLsFaq2TGezhkSrapriQhtpF3Qaky4gQvujckmsc9Q09lBZiG9a8TryPudJfqsDhgl0ntDy3VuinwIRTROlLLpjTU5osXZWcP9pvgv5OceWhIu',
});

const builder =imageUrlBuilder(client);
export const urlFor = (source) =>{ builder.image(source)};

