import { useToast } from "vue-toastification";

const toast = useToast();

export function spawnToast(code) {
  let msg;
  console.log(code);
  if (code === "auth/invalid-email") msg = "L'email inserita non è valida";
  if (code === "auth/user-not-found" || code === "auth/wrong-password")
    msg = "L'email o la password inserite sono sbagliate";
  else msg = "C'è stato un errore";

  toast.error(msg, { timeout: 2000 });
}
