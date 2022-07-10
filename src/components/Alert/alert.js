export default function (errorCode) {
  switch (errorCode) {
    case 'auth/email-already-exists':
      return 'E posta adresi zaten kayıtlı';
      break;
    case 'auth/invalid-email':
      return 'Geçersiz eposta adresi';
      break;
    case 'auth/invalid-password':
      return 'Paraola en az 6 karakterli olmalıdır';
      break;
    case 'auth/user-not-found':
      return 'Böyle bir kullanıcı bulunmuyor';
      break;
    case 'auth/weak-password':
      return 'Zayıf parola';
      break;
    case 'likeagain':
      return 'Gönderiyi zaten beğendiniz';
      break;
    default:
      return 'hata oluştu';
      break;
  }
}
