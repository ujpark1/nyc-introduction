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
