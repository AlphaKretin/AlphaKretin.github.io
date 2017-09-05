--Tinsight Salvage
--AlphaKretin
function c515310210.initial_effect(c)
	local e1=Effect.CreateEffect(c)
	e1:SetType(EFFECT_TYPE_ACTIVATE)
	e1:SetCost(c515310210.cost)
	e1:SetTarget(c515310210.target)
	e1:SetOperation(c515310210.operation)
	c:RegisterEffect(c1)
end
function c515310210.cfilter(c)
	return c:IsType(TYPE_MONSTER) and c:IsSetCard(0xf35) and c:IsAbleToDeckAsCost()
end
function c515310210.cost()
	if chk==0 then return Duel.IsExistingMatchingCard(c515310210.cfilter,tp,LOCATION_GRAVE,0,1,nil) end
	Duel.Hint(HINT_SELECTMSG,tp,HINTMSG_TODECK)
	local tc=Duel.SelectMatchingCard(tp,c515310210.cfilter,tp,LOCATION_GRAVE,0,1,1,nil)
	Duel.SendtoDeck(tc,0)
	Duel.ShuffleDeck(tp)
end
function c515310210.filter(c)
	return c:IsType(TYPE_MONSTER) and c:IsSetCard(0xf35) and c:IsAbleToHand()
end
function c515310210.target()
	if chkc then return chkc:IsLocation(LOCATION_GRAVE) and c515310210.filter(chkc) end
	if chk==0 then return Duel.IsExistingTarget(c515310210.filter,tp,LOCATION_GRAVE,0,1,nil) end
	local g=Duel.SelectTarget(tp,c515310210.filter,tp,LOCATION_GRAVE,0,1,1,nil)
	Duel.SetOperationInfo()
end
function c515310210.operation()
	local tc=Duel.GetFirstTarget()
	Duel.SendtoHand(tc,tp,REASON_EFFECT)
	Duel.Draw(tp,1,REASON_EFFECT)
end
