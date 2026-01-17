import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1514565131-fce0801e5785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwY2l0eSUyMHNreWxpbmV8ZW58MXx8fHwxNzY4NTUyNjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="New York City Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">New York City</h1>
            <p className="text-xl md:text-2xl">꿈이 이루어지는 도시</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-6">세계의 중심</h2>
            <p className="text-lg text-gray-700 mb-4">
              뉴욕시티는 미국 최대의 도시이자 세계적인 금융, 문화, 예술의 중심지입니다.
            </p>
            <p className="text-lg text-gray-700">
              약 850만 명의 인구가 살고 있으며, 다양한 문화와 배경을 가진 사람들이 모여 
              역동적이고 활기찬 도시를 만들어가고 있습니다.
            </p>
          </div>
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1503179008861-d1e2b41f8bec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aW1lcyUyMHNxdWFyZSUyMG5pZ2h0fGVufDF8fHx8MTc2ODU5NDA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Times Square"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🗽</div>
            <h3 className="text-xl font-bold mb-2">자유의 여신상</h3>
            <p className="text-gray-600">뉴욕을 상징하는 대표적인 랜드마크</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌳</div>
            <h3 className="text-xl font-bold mb-2">센트럴 파크</h3>
            <p className="text-gray-600">도심 속 거대한 녹색 오아시스</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-xl font-bold mb-2">브로드웨이</h3>
            <p className="text-gray-600">세계 최고의 뮤지컬과 공연의 메카</p>
          </div>
        </div>
      </div>

      {/* Central Park Image Section */}
      <div className="w-full h-96 mb-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW50cmFsJTIwcGFyayUyMG5ldyUyMHlvcmt8ZW58MXx8fHwxNzY4NTU1NjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Central Park"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Famous Restaurants Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">뉴욕 유명 맛집</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXR6JTIwZGVsaWNhdGVzc2VufGVufDF8fHx8MTc2ODU5NDA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Katz's Delicatessen"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Katz's Delicatessen</h3>
              <p className="text-gray-600 mb-3">
                뉴욕에서 가장 유명한 델리카테센 중 하나로, 1888년부터 운영되어온 뉴욕의 역사입니다. 
                페이스트라미 샌드위치로 유명하며, "When Harry Met Sally"의 유명한 장면이 촬영된 곳이기도 합니다.
              </p>
              <p className="text-sm text-gray-500">📍 Lower East Side, Manhattan</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXRlciUyMGx1Z2VyJTIwc3RlYWt8ZW58MXx8fHwxNzY4NTk0MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Peter Luger Steak House"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Peter Luger Steak House</h3>
              <p className="text-gray-600 mb-3">
                1887년에 문을 연 브루클린의 전설적인 스테이크 하우스입니다. 
                세계 최고의 포터하우스 스테이크를 제공하며, 미쉐린 가이드에서 별을 받은 유명 레스토랑입니다.
              </p>
              <p className="text-sm text-gray-500">📍 Williamsburg, Brooklyn</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXZhaW4lMjBiYWtlcnl8ZW58MXx8fHwxNzY4NTk0MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Levain Bakery"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Levain Bakery</h3>
              <p className="text-gray-600 mb-3">
                센트럴 파크 근처에 위치한 유명한 베이커리입니다. 
                크고 두꺼운 초콜릿 칩 쿠키로 전 세계적으로 유명하며, 뉴욕을 방문하는 관광객들이 반드시 찾는 곳입니다.
              </p>
              <p className="text-sm text-gray-500">📍 Upper West Side, Manhattan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg">뉴욕시티에서 당신만의 꿈을 펼쳐보세요</p>
          <p className="text-gray-400 mt-2">The City That Never Sleeps</p>
        </div>
      </footer>
    </div>
  );
}
