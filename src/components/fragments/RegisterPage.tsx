
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react"; // Mengubah import ini
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Alert, AlertDescription } from "../ui/alert";
import { User, QrCode } from "lucide-react";

const RegistrationSystem = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [userId, setUserId] = useState("");

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    // Generate a unique ID for the user (in real application, this would come from backend)
    const uniqueId = `USER_${Math.random().toString(36).substr(2, 9)}`;
    setUserId(uniqueId);
    setIsRegistered(true);

    // In real application, you would send this data to your backend
    console.log("Registration data:", {
      ...formData,
      userId: uniqueId,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto">
        {!isRegistered ? (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Registrasi User
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Register
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="w-5 h-5" />
                QR Code Registrasi
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Alert className="mb-4">
                <AlertDescription>
                  Registrasi berhasil! Silakan simpan QR Code ini
                </AlertDescription>
              </Alert>

              <div className="bg-white p-4 rounded-lg inline-block mb-4">
                <QRCodeSVG // Mengubah komponen QRCode menjadi QRCodeSVG
                  value={"https://ggsuspension.net/#/form-pelanggan"}
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </div>

              <div className="text-sm text-gray-600">User ID: {userId}</div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default RegistrationSystem;
