// @ts-nocheck
import {app} from './index'
import { getFirestore } from "firebase/firestore";
import { doc, addDoc,collection,updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import {query, where, getDocs } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const db = getFirestore(app);

function formatDate(date) {
    let datePart = [
      date.getMonth() + 1,
      date.getDate(),
      date.getFullYear()
    ].map((n, i) => n.toString().padStart(i === 2 ? 4 : 2, "0")).join("/");
    let timePart = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    ].map((n, i) => n.toString().padStart(2, "0")).join(":");
    return datePart + " " + timePart;
  }

export const addData = async (name:any,email:any,subject:any,phoneno:any,message:any) => {
    const s = toast.loading("Submitting Request!")

    // add created at timestamp
    const pr = await addDoc(collection(db, "contact"), {
        name:name,
        email:email,
        subject:subject,
        phoneno:phoneno,
        message:message,
        createdAt:formatDate(new Date())
      });
        // toast.promise(pr, {
        //       loading: 'Loading',
        //       success: 'data added successfully',
        //       error: 'Error',
        //     });
        // s.dismiss()
        toast.dismiss(s);
        toast.success('Successfully submitted!');
        toast.success('We will contact you soon!');
  }