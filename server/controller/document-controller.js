
import Document from "../schema/documentSchema.js";

export const getDocument = async ({ id, name }) => {
    console.log("Hello" ,id, name);
    if (id === null) return;

    const document = await Document.findById(id);

    if (document) return document;

    console.log("get Doc" + name);

    return await Document.create({ _id: id,name:(name+ " " + id),data: "" });
}

export const updateDocument = async (id, name, data) => {
    // console.log('upadate Doc' + name);

    return await Document.findByIdAndUpdate(id,{ name,data });
}