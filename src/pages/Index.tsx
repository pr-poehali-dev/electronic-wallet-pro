import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [balance, setBalance] = useState(5420);
  const [cashback, setCashback] = useState(542);
  const [purchaseAmount, setPurchaseAmount] = useState('');
  const [showCalculation, setShowCalculation] = useState(false);

  const calculateCashback = () => {
    const amount = parseFloat(purchaseAmount);
    if (!isNaN(amount) && amount > 0) {
      const newCashback = amount * 0.1;
      setCashback(cashback + newCashback);
      setBalance(balance + newCashback);
      setShowCalculation(true);
      setTimeout(() => setShowCalculation(false), 3000);
    }
  };

  const features = [
    {
      icon: 'Wallet',
      title: '10% на каждую покупку',
      description: 'Получайте кэшбэк со всех транзакций автоматически'
    },
    {
      icon: 'Shield',
      title: 'Полная безопасность',
      description: 'Защита данных на уровне банковских стандартов'
    },
    {
      icon: 'Zap',
      title: 'Мгновенные переводы',
      description: 'Отправляйте и получайте деньги за секунды'
    },
    {
      icon: 'TrendingUp',
      title: 'Накопление растёт',
      description: 'Чем больше покупок, тем больше кэшбэк'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Регистрация',
      description: 'Создайте аккаунт за 2 минуты'
    },
    {
      step: '02',
      title: 'Привяжите карту',
      description: 'Добавьте способ оплаты'
    },
    {
      step: '03',
      title: 'Совершайте покупки',
      description: 'Платите как обычно'
    },
    {
      step: '04',
      title: 'Получайте 10%',
      description: 'Кэшбэк начисляется автоматически'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        <nav className="flex justify-between items-center mb-16 animate-fade-in">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Icon name="Wallet" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CashWallet
            </span>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
            Войти
          </Button>
        </nav>

        <section className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Электронный кошелёк<br />с 10% кэшбэком
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Каждая покупка увеличивает ваш баланс. Платите и зарабатывайте одновременно.
          </p>
          
          <Card className="max-w-md mx-auto p-8 bg-gradient-to-br from-card to-muted border-border backdrop-blur-sm animate-scale-in">
            <div className="mb-6">
              <p className="text-muted-foreground mb-2">Текущий баланс</p>
              <p className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {balance.toLocaleString('ru-RU')} ₽
              </p>
            </div>
            
            <div className="bg-primary/10 rounded-xl p-4 mb-6 border border-primary/20">
              <p className="text-sm text-muted-foreground mb-1">Накоплено кэшбэка</p>
              <p className="text-3xl font-bold text-primary">
                +{cashback.toLocaleString('ru-RU')} ₽
              </p>
            </div>

            <div className="space-y-3">
              <Input
                type="number"
                placeholder="Введите сумму покупки"
                value={purchaseAmount}
                onChange={(e) => setPurchaseAmount(e.target.value)}
                className="bg-background border-border"
              />
              <Button 
                onClick={calculateCashback}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white animate-pulse-glow"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать кэшбэк
              </Button>
            </div>

            {showCalculation && (
              <div className="mt-4 p-4 bg-accent/10 border border-accent/20 rounded-lg animate-scale-in">
                <p className="text-accent font-semibold">
                  🎉 Вы получите +{(parseFloat(purchaseAmount) * 0.1).toFixed(0)} ₽ кэшбэка!
                </p>
              </div>
            )}
          </Card>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Преимущества CashWallet
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Как это работает?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-6xl font-bold text-primary/20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8">
                    <Icon name="ArrowRight" className="text-primary/30" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-20">
          <Card className="max-w-2xl mx-auto p-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <h2 className="text-4xl font-bold mb-4">Начните зарабатывать сегодня</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Присоединяйтесь к тысячам пользователей, которые уже получают кэшбэк
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-lg px-8 py-6"
            >
              <Icon name="Rocket" size={24} className="mr-2" />
              Создать кошелёк
            </Button>
          </Card>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <Card className="max-w-xl mx-auto p-8 bg-card border-border">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-muted-foreground">support@cashwallet.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-secondary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Телефон</p>
                  <p className="text-muted-foreground">8 (800) 555-35-35</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Поддержка 24/7</p>
                  <p className="text-muted-foreground">Онлайн чат на сайте</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <footer className="text-center py-8 text-muted-foreground border-t border-border">
          <p>© 2024 CashWallet. Все права защищены.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
