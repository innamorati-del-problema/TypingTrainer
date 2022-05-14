import { useToast } from "vue-toastification";

const toast = useToast();

export function spawnToast(code) {
  let msg;
  console.log(code);
  if (code === "auth/invalid-email") msg = "L'email inserita non è valida";
  else if (code === "auth/user-not-found" || code === "auth/wrong-password")
    msg = "L'email o la password inserite sono sbagliate";
  else if (code === "auth/passwords-dont-match")
    msg = "Le password non corrispondono";
  else if (code === "auth/weak-password")
    msg = "La password deve essere lunga almeno 6 caratteri";
  else msg = "C'è stato un errore";

  toast.error(msg, { timeout: 2000, bodyClassName: "toast" });
}
