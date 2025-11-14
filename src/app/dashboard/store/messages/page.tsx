import { Search, Send } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const conversations = [
  { id: 1, name: 'أحمد المالكي', message: 'هل الكمبيوتر المحمول لا يزال متوفراً؟', time: '2:45 PM', avatarId: 'user-avatar-1' },
  { id: 2, name: 'نورة عبدالله', message: 'ما هي الأحجام المتوفرة لديكم؟', time: '1:30 PM', avatarId: 'user-avatar-3' },
  { id: 3, name: 'خالد فهد', message: 'شكراً لك!', time: 'أمس', avatarId: 'user-avatar-2' },
];

const messages = [
    { sender: 'other', text: 'هل الكمبيوتر المحمول لا يزال متوفراً؟', time: '2:45 PM' },
    { sender: 'me', text: 'نعم، هو كذلك! لدينا بضع وحدات متبقية.', time: '2:46 PM' },
    { sender: 'other', text: 'رائع، هل يمكنني حجز واحد؟', time: '2:47 PM' },
];

export default function MessagesPage() {
  return (
    <div className="h-[calc(100vh-120px)] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="md:col-span-1 lg:col-span-1 flex flex-col border rounded-lg">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">الرسائل</h2>
          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="البحث في الرسائل" className="pl-9" />
          </div>
        </div>
        <ScrollArea className="flex-1">
          {conversations.map((convo) => {
            const avatar = PlaceHolderImages.find(img => img.id === convo.avatarId);
            return (
                <div key={convo.id} className="flex items-start gap-4 p-4 border-b hover:bg-accent cursor-pointer">
                    <Avatar>
                    <AvatarImage src={avatar?.imageUrl} alt={convo.name} data-ai-hint={avatar?.imageHint} />
                    <AvatarFallback>{convo.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                    <div className="flex justify-between">
                        <p className="font-semibold">{convo.name}</p>
                        <p className="text-xs text-muted-foreground">{convo.time}</p>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{convo.message}</p>
                    </div>
                </div>
            )
          })}
        </ScrollArea>
      </div>

      <div className="md:col-span-2 lg:col-span-3 flex flex-col border rounded-lg h-full">
        <div className="flex items-center gap-4 p-4 border-b">
          <Avatar>
            <AvatarImage src={PlaceHolderImages.find(i => i.id === 'user-avatar-1')?.imageUrl} alt="أحمد المالكي" />
            <AvatarFallback>أ</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold">أحمد المالكي</h3>
        </div>
        <ScrollArea className="flex-1 p-4 bg-muted/20">
            <div className="space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-end gap-2 ${msg.sender === 'me' ? 'justify-end' : ''}`}>
                         {msg.sender === 'other' && <Avatar className="h-8 w-8"><AvatarImage src={PlaceHolderImages.find(i => i.id === 'user-avatar-1')?.imageUrl} /></Avatar>}
                        <div className={`rounded-lg p-3 max-w-xs lg:max-w-md ${msg.sender === 'me' ? 'bg-primary text-primary-foreground' : 'bg-card'}`}>
                            <p>{msg.text}</p>
                            <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{msg.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </ScrollArea>
        <div className="p-4 border-t bg-card">
          <div className="relative">
            <Input placeholder="اكتب رسالة..." className="pr-12" />
            <Button size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
